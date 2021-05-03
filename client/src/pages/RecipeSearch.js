import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import RecipeList from "../components/RecipeList";
import "../styles/RecipeSearch.css";

axios.defaults.withCredentials = true;

const RecipeSearch = ({ accessToken }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchKey, setSearchKey] = useState("username");
  const [recipes, setRecipes] = useState(["initial"]);

  const handleSearch = () => {
    if (searchTerm) {
      axios
        .get(
          `http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/search?${searchKey}=${searchTerm}`,
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )
        .then((res) => {
          setRecipes(res.data.data.recipes);
        })
        .catch((e) => console.log(Error in handleSearch));
    }
  };

  const handleStateChange = (value) => (e) => {
    const stateHooks = { key: setSearchKey, term: setSearchTerm };
    stateHooks[value](e.target.value);
  };

  // const hardCodedRecipes = [
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  //   {
  //     food_img:
  //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  //     food_name: "샐러드",
  //     isOn: true,
  //   },
  // ];

  return (
    <main className="main recipe-search">
      <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
        <select onChange={handleStateChange("key")}>
          <option value="username">작성자</option>
          <option value="item">재료이름</option>
          <option value="foodname">요리 이름</option>
        </select>
        <input type="text" onChange={handleStateChange("term")} />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <RecipeList recipes={recipes} className="recipeList" />
    </main>
  );
};

export default withRouter(RecipeSearch);

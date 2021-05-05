import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import RecipeList from "../components/RecipeList";
import "../styles/RecipeSearch.css";

axios.defaults.withCredentials = true;

const RecipeSearch = ({ history, initUserState }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchKey, setSearchKey] = useState("username");
  const [recipes, setRecipes] = useState(["initial"]);

  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

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
          if (res.data.data.recipes) {
            setRecipes(res.data.data.recipes);
          } else {
            setRecipes([]);
          }
        })
        .catch((e) => console.log("Error in handleSearch"));
    }
  };

  const handleStateChange = (value) => (e) => {
    const stateHooks = { key: setSearchKey, term: setSearchTerm };
    stateHooks[value](e.target.value);
  };

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

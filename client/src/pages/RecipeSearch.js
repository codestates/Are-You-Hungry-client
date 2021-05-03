import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import RecipeList from "../components/RecipeList";
import "../styles/RecipeSearch.css";

const RecipeSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    if (searchTerm) {
      axios
        .get(
          `http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/search/?foodname=${searchTerm}`
        )
        .then((res) => {
          setRecipes(res.data.data.recipes);
        })
        .catch((e) => console.log(e));
    } else {
      console.log("Type something to search for!");
    }
  };

  return (
    <main className="main main-page">
      <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <RecipeList recipes={recipes} className="recipeList" />
    </main>
  );
};

export default withRouter(RecipeSearch);

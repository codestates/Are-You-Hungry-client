import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";

const RecipeList = ({ recipes }) => {
  const renderedRecipeCards = recipes.map((recipe) => {
    return <RecipeCard recipe={recipe} />;
  });

  return <div className="recipe-list-grid">{renderedRecipeCards}</div>;
};

export default RecipeList;

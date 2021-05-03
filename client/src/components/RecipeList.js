import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";

const RecipeList = ({ recipes }) => {
  // initial render
  if (recipes[0] === "initial") {
    return (
      <div className="initial">
        <h2>Welcome!</h2>
        <p>What would you like to eat today?</p>
      </div>
    );
  }

  // failed to fetch recipes
  if (recipes.length === 0) {
    return (
      <div className="display-no-results">
        <h2>No recipes found!</h2>
      </div>
    );
  }

  // successfully fetched recipes
  const renderedRecipeCards = recipes.map((recipe) => {
    return <RecipeCard key={recipe.food_id} recipe={recipe} />;
  });

  return (
    <>
      <p style={{ textAlign: "center" }}>
        {renderedRecipeCards.length} recipes found!
      </p>
      <div className="recipe-list-grid">{renderedRecipeCards}</div>
    </>
  );
};

export default RecipeList;

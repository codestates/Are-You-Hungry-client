import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";

const RecipeList = ({ recipes }) => {
  if (recipes) {
    if (recipes.length === 0) {
      return (
        <div className="display-no-results">
          <h2>No results found!</h2>
          <p>Sorry!</p>
        </div>
      );
    }

    const renderedRecipeCards = recipes.map((recipe) => {
      return <RecipeCard key={recipe.food_id} recipe={recipe} />;
    });

    return <div className="recipe-list-grid">{renderedRecipeCards}</div>;
  }

  return (
    <div className="display-no-results">
      <h2>No results found!</h2>
      <p>Sorry!</p>
    </div>
  );
};

export default RecipeList;

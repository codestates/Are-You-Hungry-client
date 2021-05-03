import React from "react";
import { Link } from "react-router-dom";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img
        className="recipe-image"
        src={recipe.food_img}
        alt={recipe.food_name}
      />
      <div className="image__overlay image__overlay-blur">
        <h2 className="recipe-name">{recipe.food_name}</h2>
        <Link
          to={`/recipe/${recipe.food_name}`}
          food={recipe.food_name}
          className="recipe-link"
        >
          레시피 보기
        </Link>
        <button className="heart" id="heart-button"></button>
      </div>
    </div>
  );
};

export default RecipeCard;

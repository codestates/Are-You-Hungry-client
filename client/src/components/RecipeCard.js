import React from "react";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={recipe.link} alt={recipe.name} />
      <div className="image__overlay image__overlay-blur">
        <h2 className="recipe-name">{recipe.name}</h2>
        <a href="#" className="recipe-link">
          레시피 보기
        </a>
        <button class="heart" id="heart-button"></button>
      </div>
    </div>
  );
};

export default RecipeCard;

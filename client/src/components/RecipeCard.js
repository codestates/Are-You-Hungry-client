import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const [isOn, setIsOn] = useState(recipe.isOn);

  const clickHeart = () => {
    recipe.isOn = !recipe.isOn
    setIsOn(!isOn)
  }

  console.log('recipe.isOn: ' + recipe.isOn)
  console.log('isOn: ' + isOn)

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
          to={`/recipe/${recipe.food_id}`}
          food={recipe.food_name}
          className="recipe-link"
        >
          레시피 보기
        </Link>
        <button
          id="recipe-heart"
          onClick={clickHeart}
          className={recipe.isOn ? "heart liked-heart" : "heart"}
        ></button>
      </div>
    </div>
  );
  
};

export default RecipeCard;

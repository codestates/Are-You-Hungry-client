import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";

import "../styles/Recipe.css";

const Recipe = (props) => {
  const food_id = props.match.params.food_id;
  const { accessToken } = props;
  const [foodInfo, setFoodInfo] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecipe = () => {
    axios
      .get(
        `http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user/recipe/${food_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.Ingredients);
        if (res.data.data.Food_info) {
          setFoodInfo(res.data.data.Food_info);
          setIngredients(res.data.data.Ingredients);
          setInstructions(res.data.data.Recipes.reverse());
        } else {
          setFoodInfo("No Recipes Found");
        }
        setIsLoading(false);
      })
      .catch((e) => console.log("Error in fetchRecipe!"));
  };

  useEffect(fetchRecipe, []);
  useEffect(() => {
    console.log(foodInfo);
  }, [foodInfo]);

  return (
    <main className="main recipe-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : typeof foodInfo === "string" ? (
        <h2>No recipes found!</h2>
      ) : (
        <>
          <h2>{foodInfo.food_name}</h2>
          <img src={foodInfo.food_img} alt={foodInfo.food_name} />
          <p>
            태그: {foodInfo.level}, {foodInfo.nation}, {foodInfo.qnt},{" "}
            {foodInfo.cooking_time}
          </p>
          <p>{foodInfo.summary}</p>
          <p>재료</p>
          <ul>
            {ingredients.map((item) => {
              return (
                <li>
                  {item.name}, {item.cap}
                </li>
              );
            })}
          </ul>
          <p>조리법</p>
          <ul>
            {instructions.map((instruction) => {
              return <li>{instruction.cooking_dc}</li>;
            })}
          </ul>
        </>
      )}
    </main>
  );
};

export default withRouter(Recipe);

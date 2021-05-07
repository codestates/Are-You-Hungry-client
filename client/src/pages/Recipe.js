import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "../styles/Recipe.css";

const Recipe = ({ match, initUserState, history }) => {
  const food_id = match.params.food_id;

  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

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

  return (
    <main className="main recipe-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : typeof foodInfo === "string" ? (
        <h2>No recipes found!</h2>
      ) : (
        <>
          <section className="bg_light">
            <div className="container">
              <div className="split-grid">
                <div>
                  <img
                    id="food-img"
                    src={
                      foodInfo.food_img
                        ? foodInfo.food_img
                        : "https://images.unsplash.com/photo-1545602608-a2071d60c6c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=994&q=80"
                    }
                    alt={foodInfo.food_name}
                  />
                </div>
                <div className="food-info-container">
                  <h1 id="food-title">{foodInfo.food_name}</h1>
                  <p>{foodInfo.summary} </p>
                  <p className="tag">
                    태그: {foodInfo.level}, {foodInfo.nation}, {foodInfo.qnt},{" "}
                    {foodInfo.cooking_time}, {foodInfo.calorie}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg_dark">
            <div className="container">
              <h2 className=" title">INGREDIENTS</h2>
              <div className="ingredients-container">
                <ul className="ingredients">
                  {ingredients.map((item) => {
                    return (
                      <li className="item">
                        {item.name}, {item.cap}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
          <section className="bg_primary">
            <div className="container">
              <div className="recipe-container">
                <h2 className="title">INSTRUCTIONS</h2>
                <ol>
                  {instructions.map((instruction) => {
                    return <li className="recipe">{instruction.cooking_dc}</li>;
                  })}
                </ol>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default withRouter(Recipe);

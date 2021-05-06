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
    <main className="main">
      {isLoading ? (
        <p>Loading...</p>
      ) : typeof foodInfo === "string" ? (
        <h2 className="recipe-page">No recipes found!</h2>
      ) : (
        <>
          {/* <h2>{foodInfo.food_name}</h2>
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
          </ul> */}

          <section className="bg_light">
            <div className="container">
              <div className="split">
                <div>
                  <img src={foodInfo.food_img} alt={foodInfo.food_name} />
                </div>
                <div>
                  <h1 className="food_name">{foodInfo.food_name}</h1>
                  <p>{foodInfo.summary} </p>
                  <p>
                    태그: {foodInfo.level}, {foodInfo.nation}, {foodInfo.qnt},{" "}
                    {foodInfo.cooking_time}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg_dark">
            <div className="container">
              <h2 className="text_center">INGREDIENTS(재료)</h2>
              <div className="split">
                <ul className="ingredients">
                  {ingredients.map((item) => {
                    return (
                      <li>
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
              <div className="split">
                <h2 className="text_center">RECIPE(조리법)</h2>
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

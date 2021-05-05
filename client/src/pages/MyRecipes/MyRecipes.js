import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import RecipeList from "../../components/RecipeList";
import "../../styles/Favorites.css";

const MyRecipes = ({ history, initUserState, userInfo }) => {
  const username = userInfo.username;
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

  const [uploaded, setUploaded] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUploads = () => {
    axios
      .get(
        `http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user/uploaded/${username}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.data) {
          setUploaded(res.data.data);
        }
        setIsLoading(false);
      })
      .catch((e) => console.log("Error in fetchUploads!"));
  };

  const hardcodedRecipes = [
    {
      food_id: 1,
      food_name: "나물비빔밥",
      food_img: "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
      like: 1,
      isOn: true,
    },
    {
      food_id: 281,
      food_name: "상추겉절이비빔밥",
      food_img: "http://file.okdab.com/UserFiles/searching/recipe/071700.jpg",
      like: 0,
      isOn: false,
    },
    {
      food_id: 299,
      food_name: "열무비빔밥",
      food_img: "http://file.okdab.com/UserFiles/searching/recipe/076800.jpg",
      like: 0,
      isOn: false,
    },
    {
      food_id: 338,
      food_name: "콩나물비빔밥",
      food_img: "http://file.okdab.com/UserFiles/searching/recipe/086800.jpg",
      like: 0,
      isOn: false,
    },
    {
      food_id: 427,
      food_name: "돌솥비빔밥",
      food_img: "http://file.okdab.com/UserFiles/searching/recipe/121400.jpg",
      like: 0,
      isOn: false,
    },
  ];

  useEffect(() => setUploaded(hardcodedRecipes), []);

  return (
    <main className="main favorites">
      <h1>My Recipes</h1>
      <div className="container">
        {isLoading ? <p>Loading...</p> : <RecipeList recipes={uploaded} />}
      </div>
    </main>
  );
};

export default withRouter(MyRecipes);

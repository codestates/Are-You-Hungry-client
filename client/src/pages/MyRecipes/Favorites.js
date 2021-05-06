import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import RecipeList from "../../components/RecipeList";
import "../../styles/Favorites.css";

const Favorites = ({ initUserState, history, userInfo }) => {
  const username = userInfo.username;

  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

  const [favs, setFavs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavs = () => {
    axios
      .get(
        `http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user/likes/${username}`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((res) => {
        if (res.data.data) {
          const dataWithIsOn = res.data.data.map((recipe) => {
            return { ...recipe, isOn: true };
          });
          setFavs(dataWithIsOn);
        } else {
          setFavs([]);
        }
        setIsLoading(false);
      })
      .catch((e) => console.log("Error in fetchFavs!"));
  };

  useEffect(fetchFavs, []);

  return (
    <main className="main favorites">
      <h1>My Favorite Recipes</h1>
      <div className="container">
        {isLoading ? <p>Loading...</p> : <RecipeList recipes={favs} />}
      </div>
    </main>
  );
};

export default withRouter(Favorites);

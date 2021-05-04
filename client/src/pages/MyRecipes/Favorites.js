import React, { useState, useEffect } from "react";
import axios from "axios";

import RecipeList from "../../components/RecipeList";
import "../../styles/Favorites.css";

const Favorites = (props) => {
  const username = props.userInfo.username;
  const accessToken = props.accessToken;

  const [favs, setFavs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavs = () => {
    axios
      .get(
        `http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user/likes?username=${username}`,
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
        }
        setIsLoading(false);
      })
      .catch((e) => console.log("Error in fetchFavs!"));
  };

  useEffect(fetchFavs, [accessToken, username]);

  return (
    <main className="main favorites">
      <h1>My Favorite Recipes</h1>
      <div className="container">
        {isLoading ? <p>Loading...</p> : <RecipeList recipes={favs} />}
      </div>
    </main>
  );
};

export default Favorites;

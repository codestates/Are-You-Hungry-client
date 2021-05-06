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

  useEffect(fetchUploads, []);

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

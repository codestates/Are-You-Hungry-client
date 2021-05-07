import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import RecipeSearch from "./pages/RecipeSearch";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/MyRecipes/Favorites";
import NewRecipe from "./pages/MyRecipes/NewRecipe";
import Mypage from "./pages/Mypage";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import Delete from "./pages/Delete";

import SideBar from "./components/SideBar";
import "./App.css";

const App = () => {
  const accessToken = sessionStorage.getItem("accessToken");

  const [userInfo, setUserInfo] = useState([]);

  const onLogInSuccess = (data) => {
    setUserInfo(data.userinfo);
    sessionStorage.setItem("accessToken", data.accessToken);
  };

  const initUserState = () => {
    setUserInfo([]);
    sessionStorage.clear();
  };

  return (
    <>
      <SideBar initUserState={initUserState} />
      <Switch>
        <Route exact path="/signin">
          <SignIn onLogInSuccess={onLogInSuccess} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/recipe">
          <RecipeSearch initUserState={initUserState} />
        </Route>
        <Route exact path="/recipe/favorites">
          <Favorites userInfo={userInfo} initUserState={initUserState} />
        </Route>
        <Route exact path="/recipe/add-new-recipe">
          <NewRecipe initUserState={initUserState} userInfo={userInfo} />
        </Route>
        <Route exact path="/recipe/myrecipes">
          <MyRecipes initUserState={initUserState} userInfo={userInfo} />
        </Route>
        <Route path="/recipe/:food_id">
          <Recipe initUserState={initUserState} />
        </Route>
        <Route path="/mypage">
          <Mypage userInfo={userInfo} initUserState={initUserState} />
        </Route>
        <Route path="/delete">
          <Delete userInfo={userInfo} initUserState={initUserState} />
        </Route>
        <Route
          exact
          path="/"
          render={() => {
            return accessToken ? (
              <Redirect to="/recipe" />
            ) : (
              <Redirect to="/signin" />
            );
          }}
        />
      </Switch>
    </>
  );
};

export default withRouter(App);

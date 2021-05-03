import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import RecipeSearch from "./pages/RecipeSearch";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/MyRecipes/Favorites";
import MyPage from "./pages/MyPage";

import SideBar from "./components/SideBar";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  const onLogInSuccess = (data) => {
    setIsLoggedIn((prev) => !prev);
    setUserInfo(data.userinfo);
    setAccessToken(data.accessToken);
  };

  const handleLogOut = () => {
    setUserInfo([]);
    setIsLoggedIn(false);
    setAccessToken("");
  };

  return (
    <>
      <SideBar isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <Switch>
        <Route exact path="/signin">
          <SignIn onLogInSuccess={onLogInSuccess} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/recipe">
          <RecipeSearch accessToken={accessToken} />
        </Route>
        <Route exact path="/recipe/favorites">
          <Favorites accessToken={accessToken} userInfo={userInfo} />
        </Route>
        <Route path="/recipe/:foodname">
          <Recipe accessToken={accessToken} />
        </Route>
        <Route path="/mypage">
          <MyPage accessToken={accessToken} userInfo={userInfo} />
        </Route>
        <Route
          exact
          path="/"
          render={() => {
            return isLoggedIn ? (
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

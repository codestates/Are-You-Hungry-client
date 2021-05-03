import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RecipeSearch from "./pages/RecipeSearch";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/MyRecipes/Favorites";

import SideBar from "./components/SideBar";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const onLogInSuccess = (userinfo) => {
    setIsLoggedIn((prev) => !prev);
    setUserInfo(userInfo);
  };

  const handleLogOut = () => {
    setUserInfo([]);
    setIsLoggedIn(false);
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
          <RecipeSearch />
        </Route>
        <Route path="/recipe/:foodname">
          <Recipe />
        </Route>
        <Route path="/recipe/favorites">
          <Favorites />
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

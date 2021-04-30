import React from "react";

const LoggedInNav = () => {
  return (
    <>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <a href="#">Home</a>
          </li>
          <li className="main-nav__item">
            <a href="#">My Recipes</a>
            <ul className="sub-nav">
              <li className="sub-nav__item">
                <a href="#">Favorite recipes</a>
              </li>
              <li className="sub-nav__item">
                <a href="#">My recipes</a>
              </li>
              <li className="sub-nav__item">
                <a href="#">Add new recipe</a>
              </li>
            </ul>
          </li>
          <li className="main-nav__item">
            <a href="#">My page</a>
          </li>
          <li className="main-nav__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <div className="sign-out__btn">
        <a href="#">Sign Out</a>
      </div>
    </>
  );
};

export default LoggedInNav;

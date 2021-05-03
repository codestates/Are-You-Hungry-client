import React from "react";
import { Link } from "react-router-dom";

const LoggedInNav = ({ handleLogOut }) => {
  return (
    <>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="main-nav__item">
            <p href="#">My Recipes</p>
            <ul className="sub-nav">
              <li className="sub-nav__item">
                <Link to="/favorites" className="link">
                  Favorite recipes
                </Link>
              </li>
              <li className="sub-nav__item">
                <Link to="/my-recipes" className="link">
                  My recipes
                </Link>
              </li>
              <li className="sub-nav__item">
                <Link to="/add-new-recipe" className="link">
                  Add new recipe
                </Link>
              </li>
            </ul>
          </li>
          <li className="main-nav__item">
            <Link to="/mypage" className="link">
              My Page
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sign-out__btn">
        <Link to="/" className="link" onClick={handleLogOut}>
          Sign Out
        </Link>
      </div>
    </>
  );
};

export default LoggedInNav;

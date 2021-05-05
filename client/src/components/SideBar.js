import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import "../styles/SideBar.css";

const SideBar = ({ initUserState, history }) => {
  const accessToken = sessionStorage.getItem("accessToken");

  const onLogOut = () => {
    axios
      .get(
        "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/signout",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((res) => {
        initUserState();
        history.push("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <header className="sidebar">
      <h2>Hungry?</h2>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          {accessToken ? (
            <>
              <li className="main-nav__item">
                <p href="#">My Recipes</p>
                <ul className="sub-nav">
                  <li className="sub-nav__item">
                    <Link to="/recipe/favorites" className="link">
                      Favorite recipes
                    </Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link to="/recipe/myrecipes" className="link">
                      My recipes
                    </Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link to="/recipe/add-new-recipe" className="link">
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
            </>
          ) : null}
        </ul>
      </nav>
      {
        <div className="sign-out__btn">
          {accessToken ? (
            <Link to="/" className="link" onClick={onLogOut}>
              Sign Out
            </Link>
          ) : (
            <Link to="/" className="link" onClick={onLogOut}>
              Sign In
            </Link>
          )}
        </div>
      }
    </header>
  );
};

export default withRouter(SideBar);

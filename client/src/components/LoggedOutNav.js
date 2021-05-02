import React from "react";
import { Link } from "react-router-dom";

const LoggedOutNav = ({ handleLogOut }) => {
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
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sign-out__btn">
        <Link to="/signin" className="link" onClick={handleLogOut}>
          Sign In
        </Link>
      </div>
    </>
  );
};

export default LoggedOutNav;

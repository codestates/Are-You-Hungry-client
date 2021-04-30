import React from "react";

const LoggedOutNav = () => {
  return (
    <>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <a href="#">Home</a>
          </li>
          <li className="main-nav__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <div className="sign-out__btn">
        <a href="#">Sign In</a>
      </div>
    </>
  );
};

export default LoggedOutNav;

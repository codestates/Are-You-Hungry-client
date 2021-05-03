import React from "react";

import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import "../styles/SideBar.css";

const SideBar = ({ isLoggedIn, handleLogOut }) => {
  return (
    <header className="sidebar">
      <h2>Hungry?</h2>
      {isLoggedIn ? (
        <LoggedInNav handleLogOut={handleLogOut} />
      ) : (
        <LoggedOutNav handleLogOut={handleLogOut} />
      )}
    </header>
  );
};

export default SideBar;

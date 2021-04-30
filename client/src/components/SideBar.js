import React from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import "../styles/SideBar.css";

const SideBar = ({ isLoggedIn }) => {
  return (
    <header className="sidebar">
      <h2>Hungry?</h2>
      {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
    </header>
  );
};

export default SideBar;

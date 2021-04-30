import React from "react";
import SideBar from "./components/SideBar";
import "./App.css";

const App = () => {
  return (
    <>
      <SideBar isLoggedIn={true} />
    </>
  );
};

export default App;

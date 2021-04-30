import React from "react";
import SideBar from "../components/SideBar";
import "../styles/SignIn.css";

const SignIn = () => {
  return (
    <>
      <SideBar isLoggedIn={false} />
      <main class="main">
        <form className="signin-form">
          <h2>Sign In</h2>
          <div className="input-field">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" required />
          </div>
          <div className="button">
            <input type="submit" value="Sign In" />
          </div>
          <a href="#">Don't have an account?</a>
        </form>
      </main>
    </>
  );
};

export default SignIn;

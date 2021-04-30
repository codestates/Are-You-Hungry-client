import React from "react";
import SideBar from "../components/SideBar";
import "../styles/SignIn.css";

const SignUp = () => {
  return (
    <>
      <SideBar isLoggedIn={false} />
      <main class="main">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <div className="input-field">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" required />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="button">
            <input type="submit" value="Sign Up" />
          </div>
          <a href="#">Already have an account?</a>
        </form>
      </main>
    </>
  );
};

export default SignUp;

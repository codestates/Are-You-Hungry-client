import React from "react";
import { Link, withRouter } from "react-router-dom";

import "../styles/SignIn.css";

const SignUp = () => {
  return (
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
        <button type="submit" className="button">
          Sign In
        </button>
        <Link to="/signin" className="link">
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export default withRouter(SignUp);

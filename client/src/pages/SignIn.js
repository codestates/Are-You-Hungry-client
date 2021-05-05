import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import "../styles/Sign.css";

const SignIn = ({ onLogInSuccess, history }) => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (accessToken) {
    history.push("/");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      axios
        .post(
          "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/signin",
          {
            username: username,
            password: password,
          }
        )
        .then((res) => {
          onLogInSuccess(res.data.data);
          history.push("/");
        })
        .catch((e) => {
          console.log("Error in handleLogin");
        });
    }
  };

  return (
    <main className="main sign">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h2>Sign In</h2>
        <div className="input-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button" onClick={handleLogin}>
          Sign In
        </button>
        <Link to="/signup" className="link">
          Don't have an account?
        </Link>
      </form>
    </main>
  );
};

export default withRouter(SignIn);

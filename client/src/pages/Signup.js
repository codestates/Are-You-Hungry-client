import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import "../styles/Sign.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    axios
      .post(
        "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/signup",
        {
          email,
          password,
          name,
          username,
          phone,
        }
      )
      .then((res) => {
        props.history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleStateChange = (value) => (e) => {
    const stateHooks = {
      username: setUsername,
      password: setPassword,
      name: setName,
      phone: setPhone,
      email: setEmail,
    };

    stateHooks[value](e.target.value);
  };

  return (
    <main className="main sign">
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Sign Up</h2>
        <div className="input-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={handleStateChange("username")}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleStateChange("password")}
          />
        </div>
        <div className="input-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            onChange={handleStateChange("name")}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            onChange={handleStateChange("email")}
          />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            required
            onChange={handleStateChange("phone")}
          />
        </div>
        <button type="submit" className="button" onClick={handleSignUp}>
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

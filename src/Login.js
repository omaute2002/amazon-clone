import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password, setPassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));

    //some fancy login
  };

  const register = (e) => {
    // firebase stuff
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
            alt="amazon-logo"
          />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form action="">
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
            >
              Sign in
            </button>
          </form>

          <p>
            By continuing, you agree to Amazon Clone's Conditions of Use and
            Privacy Notice.
          </p>

          <button className="login__registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;

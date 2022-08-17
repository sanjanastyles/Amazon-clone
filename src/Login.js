import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button onClick={LogIn} type="submit" className="login_LogInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <p className="new">New to Amazon?</p>

        <button
          onClick={register}
          type="submit"
          className="login_registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

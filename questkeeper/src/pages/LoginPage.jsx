import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth} from "../firebase";
import {signInWithEmailAndPassword}from 'firebase/auth';

import "./LoginRegister.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/homepage")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login-parent-container">
      <nav className="nav-parent-container">
        <Link to="/">
          <h1 className="logo">LOGO</h1>
        </Link>
        <div className="redirectLink">
          <Link to="/register">
            <button type="button" class="btn">
              SIGN UP
            </button>
          </Link>
        </div>
      </nav>

      <div className="form-container">
        <form>
          <h2>Login</h2>
          <div class="nes-field">
            <label for="email_address">Email Address</label>
            <input
              type="text"
              id="email_address"
              class="nes-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div class="nes-field">
            <label for="password">Password</label>
            <input
              type="text"
              id="password"
              class="nes-input"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="remember-forgot-pass-container">
            <label>
              <input type="checkbox" class="nes-checkbox" />
              <span>Remember Me</span>
            </label>
            <span>Forgot Password?</span>
          </div>
          <button
            type="button"
            class="btn"
            id="login-btn"
            onClick={() => handleSubmit()}
          >
            LOGIN
          </button>
          <p className="sns-options">or login with</p>
          <div className="sns-icons">
            <i class="nes-icon gmail is-medium"></i>
            <i class="nes-icon github is-medium"></i>
          </div>
        </form>
      </div>
    </div>
  );
}

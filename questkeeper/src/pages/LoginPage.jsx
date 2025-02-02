import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth, googleProvider} from "../firebase";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, browserSessionPersistence, signInWithRedirect}from 'firebase/auth';

import "./LoginRegister.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isChecked,setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setPersistence(auth, isChecked ? browserLocalPersistence : browserSessionPersistence);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/homepage")
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const googleSignIn =()=>{
    setPersistence(auth, isChecked ? browserLocalPersistence : browserSessionPersistence);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    navigate("/homepage")
  }).catch((error) => {
    console.log(error)
  });

}
  

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
              type="password"
              id="password"
              class="nes-input"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="remember-forgot-pass-container">
            <label>
              <input type="checkbox" class="nes-checkbox" checked={isChecked} onChange={(e)=> setIsChecked(e.target.checked)}/>
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
            <i class="nes-icon google is-medium" onClick={()=> googleSignIn()}></i>
            <i class="nes-icon github is-medium" onClick={()=> githubSignIn()}></i>
          </div>
        </form>
      </div>
    </div>
  );
}

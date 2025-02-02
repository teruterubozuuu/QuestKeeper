import React from 'react'
import "./LoginRegister.css"
import { Link } from 'react-router-dom';

export default function Register() {
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
               <input type="text" id="email_address" class="nes-input"></input>
             </div>
             <div class="nes-field">
               <label for="password">Password</label>
               <input type="text" id="password" class="nes-input"></input>
             </div>
   
             <div className="remember-forgot-pass-container">
               <label>
                 <input type="checkbox" class="nes-checkbox" />
                 <span>Remember Me</span>
               </label>
               <span>Forgot Password?</span>
             </div>
             <button type="button" class="btn" id="login-btn">
                 LOGIN
               </button>
             <p className="signUpRedirect">or login with</p>
             <div className="sns-icons">
               <i class="nes-icon gmail is-medium"></i>
               <i class="nes-icon github is-medium"></i>
               </div>
           </form>
   
         </div>
       </div>
  );
}

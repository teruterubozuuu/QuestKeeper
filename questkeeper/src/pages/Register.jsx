import React from 'react'
import "./LoginRegister.css"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth} from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit =()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
      const user = userCredential.user;
      console.log(user);
      navigate("/homepage")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <div className="login-parent-container">
         <nav className="nav-parent-container">
           <Link to="/">
             <h1 className="logo">LOGO</h1>
           </Link>
           <div className="redirectLink">
             <Link to="/login">
               <button type="button" class="btn">
                 LOGIN
               </button>
             </Link>
           </div>
         </nav>
   
         <div className="form-container">
           <form>
             <h2>Sign Up</h2>
             <div class="nes-field">
               <label for="email_address">Email Address</label>
               <input type="text" id="email_address" class="nes-input" onChange={e => setEmail(e.target.value)}></input>
             </div>
             <div class="nes-field">
               <label for="username">Username</label>
               <input type="text" id="username" class="nes-input" onChange={e => setUsername(e.target.value)}></input>
             </div>
             <div class="nes-field">
               <label for="password">Password</label>
               <input type="text" id="password" class="nes-input" onChange={e => setPassword(e.target.value)}></input>
             </div>
   
            
             <button type="button" class="btn" id="register-btn" onClick={()=> handleSubmit()}>
                 SIGN UP
               </button>
             <p className="sns-options">or sign up with</p>
             <div className="sns-icons">
               <i class="nes-icon gmail is-medium"></i>
               <i class="nes-icon github is-medium"></i>
               </div>
           </form>
   
         </div>
       </div>
  );
}

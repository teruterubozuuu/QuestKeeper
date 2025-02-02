import React from 'react'
import {signOut } from "firebase/auth";
import { auth} from "../firebase";
import { useNavigate } from 'react-router-dom';


export default function HomePage() {

  const navigate = useNavigate();
  const logOut= () =>{
    signOut(auth).then(() =>{
      //Sign out successful
      console.log("success")
      navigate("/login")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div>
      HomePage
      <button onClick={()=>logOut()}>Sign Out</button>
    </div>

  )
}

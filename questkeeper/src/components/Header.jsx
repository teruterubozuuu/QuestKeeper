import React from 'react'
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';

export default function Header() {
  const [user,setUser] =useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  
    return () => unsubscribe();
  }, []);

    const navigate = useNavigate();

  return (
    <nav className='nav-parent-container'>
        {user ? (
          <>
          <Link to="/homepage">  <i class="nes-jp-logo"></i></Link>
           <div className='nav-menu'>
              <div className='user-container'>
                <div className='user-details'>
                  <p>Username</p>
                  <span>Lv. 15</span>
                </div>
                <div className='profile-picture-container'>
                  <i class="nes-icon is-medium heart"></i>
                </div>
              </div>
              <button onClick={()=>auth.signOut()} className='btn'>Sign Out</button>
           </div>
          </>
          
        ) :(
          <>
          <Link to="/"><h1 className="text-3xl font-bold">LOGO</h1></Link>
          <ul className='nav-menu'>
              <li className='nav-item'>Home</li>
              <li className='nav-item'>About</li>
              <li className='nav-item'>Contact</li>
              <Link to="/login"><button type="button" class="btn">LOGIN
              </button>
              </Link>
          </ul>
          </>

          )}
    </nav>
  )
}

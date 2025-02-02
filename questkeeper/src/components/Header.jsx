import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='nav-parent-container'>
        <h1 className='logo'>LOGO</h1>
        <ul className='nav-menu'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Contact</li>
            <Link><a class="nes-btn" href="#">LOGIN</a></Link>
        </ul>
    </nav>
  )
}

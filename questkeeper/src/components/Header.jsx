import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='nav-parent-container'>
        <Link to="/"><h1 className='logo'>LOGO</h1></Link>
        <ul className='nav-menu'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Contact</li>
            <Link to="/login"><button type="button" class="btn">LOGIN
            </button>
            </Link>
        </ul>
    </nav>
  )
}

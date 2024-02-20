// Navbar.js
import React from 'react';
import './Navbar.css'; 
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img
          src="."
          alt="BYTESSQUARE TECHNOLOGIES"
          className="logo-image"
        />
        </div>
      <ul className="nav-links">
      <Link to='/home'>
        <li>Home</li>
        </Link>
        <Link to='/about'>
        
        <li>About</li>
        </Link>
        <Link to='/connect'>
        <li>Connect</li>
        </Link>
    
        <Link to='/services'>
        <li>Services
        </li>
        </Link>
        <Link to='/feature'>
        <li>Feature
        </li>
        </Link>
        <Link to='/footer'>
        <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file for styling

function Navigation() {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'>
        <h1 className='navhead'>workers connect</h1>
      </Link>
      <ul className='nav-list'>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 아래에 CSS 예시 참고

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Career</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/github">GitHub</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
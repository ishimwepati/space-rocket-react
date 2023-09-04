// src/Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="left">
        <div className="logo">
          {/* Insert your icon here */}
          <span role="img" aria-label="Space Icon">🚀</span>
          <span>Space Traveler's Hub</span>
        </div>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li><a href="#">Space</a></li>
            <li><a href="#">Missions</a></li>
            <li><a href="#">My Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

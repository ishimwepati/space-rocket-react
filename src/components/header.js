import React from 'react';
import './header.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <img
            src={logo}
            alt="Space Logo"
            height="40"
          />
          <span>Space Traveler's Hub</span>
        </div>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li><a href="#">Space</a></li>
            <li><a href="#">Missions</a></li>
            <li>|</li>
            <li><a href="#">My Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

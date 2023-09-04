
import React from 'react';
import './header.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

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
            <li>
              <Link to="/rockets">Rockets</Link> 
            </li>
            <li>
              <Link to="/missions">Missions</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/profile">My Profile</Link> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

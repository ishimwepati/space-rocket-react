import React from 'react';
import './header.css';
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';

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
              <NavLink to="/rockets">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions">Missions</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

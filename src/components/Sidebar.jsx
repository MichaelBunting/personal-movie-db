import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/" className="sidebar__block">
      <img
        src="./images/pmdb-logo-white.png"
        className="sidebar__logo"
        alt="Personal Movie Database Logo"
      />
    </Link>

    <div className="sidebar__block">
      <div className="sidebar__block-title">Browse Your</div>

      <ul className="sidebar__menu">
        <li>
          <Link to="/movies" className="sidebar__menu-item">
            <i className="fa fa-ticket" /> Movies
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <div className="nav__search-container">
      <input type="text" className="nav__search" />
      <i className="fa fa-search nav__search-icon" />
    </div>
    <div className="nav__action-container">
      <a href="/" className="nav__action">
        Sort By
        <span className="fa-stack">
          <i className="fa fa-circle-thin fa-stack-2x" />
          <i className="fa fa-sort fa-stack-1x" />
        </span>
      </a>
      <Link to="/add" className="nav__action">
        Add New
        <span className="fa-stack">
          <i className="fa fa-circle-thin fa-stack-2x" />
          <i className="fa fa-plus fa-stack-1x" />
        </span>
      </Link>
    </div>
  </div>
);

export default Navbar;

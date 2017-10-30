import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__search-container">
                <input type="text" className="nav__search" />
                <i className="fa fa-search nav__search-icon"></i>
            </div>
            <div className="nav__action-container">
                <a href="#" className="nav__action">
                    Sort By
                    <span className="fa-stack">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-sort fa-stack-1x"></i>
                    </span>
                </a>
                <Link to="/add" className="nav__action">
                    Add New
                    <span className="fa-stack">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-plus fa-stack-1x"></i>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
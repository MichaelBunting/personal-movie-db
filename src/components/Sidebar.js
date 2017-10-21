import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__block">
                <img src="./images/pmdb-logo-white.png" className="sidebar__logo" />
            </div>

            <div className="sidebar__block">
                <div className="sidebar__block-title">Browse Your</div>

                <ul className="sidebar__menu">
                    <li>
                        <a href="#" className="sidebar__menu-item">
                            <i className="fa fa-ticket"></i> Movies
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
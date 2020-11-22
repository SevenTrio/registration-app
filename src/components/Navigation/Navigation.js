import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = ({ className = "",  handleClose}) => {
    return (
        <nav className={`Navigation ${className}`}>
            <ul className="Navigation-List">
                <li className="Navigation-Item">
                    <NavLink to="/add-user" className="Navigation-Link" onClick={handleClose}>Registration</NavLink>
                </li>
                <li className="Navigation-Item">
                    <NavLink to="/user-list" className="Navigation-Link" onClick={handleClose}>Users list</NavLink>
                </li>
                <li className="Navigation-Item">
                    <NavLink to="/about-me" className="Navigation-Link" onClick={handleClose}>About author</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
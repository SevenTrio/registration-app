import React from "react";
import Hamburger from "../Hamburger/Hamburger";

import './Header.scss'

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-Wrapper">
                <Hamburger/>
            </div>
        </div>
    );
};

export default Header;
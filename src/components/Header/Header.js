import React from "react";
import './Header.scss'

import HamburgerContainer from "../Hamburger/HamburgerContainer";

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-Wrapper">
                <HamburgerContainer/>
            </div>
        </div>
    );
};

export default Header;
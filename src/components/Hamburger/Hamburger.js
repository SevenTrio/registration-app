import React, { Fragment } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import './Hamburger.scss'

import Menu from '../Menu/Menu'
import Blackout from "../Blackout/Blackout";

const Hamburger = ({ open, handleMenuButtonClick, handleClose }) => {
    return (
        <Fragment>
            <ClickAwayListener onClickAway={handleClose}>
                <div className="Hamburger">
                    <button
                        className={`Hamburger-Button ${open ? "Hamburger-Button_open" : ""}`}
                        onClick={handleMenuButtonClick}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <Menu open={open} duration={300} handleClose={handleClose}/>
                </div>
            </ClickAwayListener>

            <Blackout open={open} duration={300} />
        </Fragment>
    )
}

export default Hamburger;
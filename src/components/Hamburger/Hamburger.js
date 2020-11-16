import React, { Component, Fragment } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Menu from '../Menu/Menu'
import Blackout from "../Blackout/Blackout";

import './Hamburger.scss'

class Hamburger extends Component {
    state = {
        open: false,
    }

    handleMenuButtonClick = () => {
        this.setState((prevState) => ({ open: !prevState.open }));
    };

    handleClickAway = () => {
        if (this.state.open) {
            this.setState({ open: false });
        }
    }

    render() {
        return (
            <Fragment>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <div className="Hamburger">
                        <button
                            className={`Hamburger-Button ${this.state.open ? "Hamburger-Button_open" : ""}`}
                            onClick={this.handleMenuButtonClick}
                        >
                            <span />
                            <span />
                            <span />
                        </button>

                        <Menu open={this.state.open} duration={300} />
                    </div>
                </ClickAwayListener>

                <Blackout open={this.state.open} duration={300} />
            </Fragment>
        );
    }
}

export default Hamburger;
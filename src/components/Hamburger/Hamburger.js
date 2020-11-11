import React, { Component, Fragment } from "react";

import Menu from '../Menu/Menu'
import Blackout from "../Blackout/Blackout";

import './Hamburger.scss'

class Hamburger extends Component {
    state = {
        open: false,
    }

    handleMenuButtonClick = () => {
        this.setState((prevState) => ({open: !prevState.open}));
    };

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        return (
            <Fragment>
                <div className="Hamburger">
                    <button
                        className={`Hamburger-Button ${this.state.open ? "Hamburger-Button_open" : ""}`}
                        onClick={this.handleMenuButtonClick}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                <Menu open={this.state.open} handleClose={this.handleClose} duration={300} />
                <Blackout open={this.state.open} duration={300} />
            </Fragment>
        );
    }
};

export default Hamburger;
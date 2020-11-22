import React, { Component } from "react";

import Hamburger from "./Hamburger";

class HamburgerContainer extends Component {
    state = {
        open: false,
    }

    handleMenuButtonClick = () => {
        this.setState((prevState) => ({ open: !prevState.open }));
    };

    handleClose = () => {
        if (this.state.open) {
            this.setState({ open: false });
        }
    }

    render() {
        return (
            <Hamburger
                open={this.state.open}
                handleMenuButtonClick={this.handleMenuButtonClick}
                handleClose={this.handleClose}
            />
        )
    }
}

export default HamburgerContainer;
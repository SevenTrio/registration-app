import React, { Component } from "react";

import App from "./App";

class AppContainer extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            this.setState((prevState) => ({
                users: [...prevState.users, ...users],
            }))
        }
    }

    addUser = (user) => {
        this.setState(
            (prevState) => ({
                users: [...prevState.users, { ...user }],
            }),
            () => {
                localStorage.setItem("users", JSON.stringify(this.state.users))
            }
        );
    };

    render() {
        return <App addUser={this.addUser} users={this.state.users}/>
    }
}

export default AppContainer;

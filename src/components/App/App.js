import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "../Header/Header";
import Registration from "../Registration/Registration"
import ClientList from "../ClientList/ClientList"
import AboutMe from "../AboutMe/AboutMe"

import './App.scss'

class App extends Component {
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
        return (
            <Router>
                <Header/>
                <div className="App-ContentWrapper">
                    <Switch>
                        <Route path="/add-user">
                            <Registration addUser={this.addUser}/>
                        </Route>
                        <Route path="/user-list">
                            <ClientList users={this.state.users}/>
                        </Route>
                        <Route path="/about-me">
                            <AboutMe />
                        </Route>
                        <Route path="/">
                            <Redirect to="/user-list"/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

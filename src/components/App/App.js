import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './App.scss'

import Header from "../Header/Header";
import Routes from "../Routes/Routes";

const App = ({ addUser, users }) => {
    return (
        <Router>
            <Header/>
            <div className="App-ContentWrapper">
                <Routes addUser={addUser} userList={users}/>
            </div>
        </Router>
    )
}

export default App;

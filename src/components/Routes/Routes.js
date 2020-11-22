import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ClientList from "../ClientList/ClientList";
import AboutMe from "../AboutMe/AboutMe";
import RegistrationContainer from "../Registration/RegistrationContainer";

const Routes = ({ addUser, userList }) => {
    return(
        <Switch>
            <Route path="/add-user" exact>
                <RegistrationContainer addUser={addUser}/>
            </Route>
            <Route path="/user-list" exact>
                <ClientList userList={userList}/>
            </Route>
            <Route path="/about-me" exact>
                <AboutMe />
            </Route>
            <Route path="/">
                <Redirect to="/user-list"/>
            </Route>
        </Switch>
    )
}

export default Routes;
import React, { Component } from "react";
import { validateCardNumber } from "./RegistrationUtils";

import Registration from "./Registration";

const initState = {
    user: {
        userName: "",
        userGender: "",
        userCreditCard: "",
        withLoyaltyProgram: false,
        userCoupon: "",
        timeStamp: ""
    },
    errors: {
        userName: "",
        userGender: "",
        userCreditCard: "",
    },
    validated: {
        userName: false,
        userGender: false,
        userCreditCard: false,
    },
};

class RegistrationContainer extends Component {
    state = {
        ...initState,
        showMessage: false
    };

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => ({
            user: {...prevState.user, [name]: value}
        }))
    };

    validateField = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        if (!/\S/.test(value)) {
            return this.setState((prevState) => ({
                errors: {...prevState.errors, [name]: "This field cannot be empty"},
                validated: {...prevState.validated, [name]: false}
            }))
        }

        let isValid;
        let errorMessage = "";

        switch(name) {
            case 'userName':
                isValid = value.match(/^[A-Za-z ]*$/i);
                if (!isValid) errorMessage = "The user name can only contain letters and spaces";
                break;

            case 'userGender':
                isValid = ["Male", "Female", "Non-binary"].includes(value);
                if (!isValid) errorMessage = `${value} it's not valid gender`;
                break;

            case 'userCreditCard':
                isValid = validateCardNumber(value.replace(/\s+/g, ''));
                if (!isValid) errorMessage = "This card is not valid";
                break;

            default:
                break;
        }

        this.setState((prevState) => ({
            validated: {...prevState.validated, [name]: isValid},
            errors: {...prevState.errors, [name]: errorMessage},
        }))
    }

    clearError = (e) => {
        const target = e.target;
        const name = target.name;
        this.setState((prevState) => ({
            errors: {...prevState.errors, [name]: ""}
        }))
    }

    handleSubmit = () => {
        let isFormValid = true;

        for (let name in this.state.validated) {
            if (!this.state.validated[name]) {
                isFormValid = false;
                if (!this.state.errors[name].length) {
                    this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: "This field cannot be empty"}
                    }))
                }
            }
        }

        if (isFormValid) {
            this.setState(
                (prevState) => ({
                    user: {...prevState.user, timeStamp: new Date()}
                }),
                () => {
                    this.props.addUser(this.state.user);
                    this.setState((prevState) => ({...prevState, ...initState, showMessage: true}));
                }
            );
        }
    };

    handleMessageClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({showMessage: false});
    };

    render() {
        return (
            <Registration 
                user={this.state.user}
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                validateField={this.validateField}
                clearError={this.clearError}
                showMessage={this.state.showMessage}
                handleMessageClose={this.handleMessageClose}
            />
        );
    }
}

export default RegistrationContainer;
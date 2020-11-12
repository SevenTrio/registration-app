import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import CardInput from '../CardInput/CardInput'
import {Transition} from "react-transition-group";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import './Registration.scss';

const validateCardNumber = (number) => {
    let regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

const luhnCheck = (val) => {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 === 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) === 0;
}

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

class Registration extends Component {
    state = {...initState, showSuccessMessage: false};

    inputTransitionDuration = 300;

    inputDefaultStyle = {
        transition: `all ${this.inputTransitionDuration}ms ease-in-out`
    }

    inputTransitionStyles = {
        entering: { opacity: 0, height: 0, marginBottom: 0 },
        entered:  { opacity: 1, height: 56, marginBottom: 32 },
        exiting:  { opacity: 0, height: 0, marginBottom: 0 },
        exited:   { opacity: 1, height: 56, marginBottom: 32 }
    };

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => ({
            user: {...prevState.user, [name]: value}
        }))};

    validateField = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        if (!value.length) {
            return this.setState((prevState) => ({
                errors: {...prevState.errors, [name]: "This field cannot be empty"},
                validated: {...prevState.validated, [name]: false}
            }))
        }

        switch(name) {
            case 'userName':
                let userNameValid = value.match(/^[A-Za-z ]*$/i);
                if (!userNameValid) {
                     this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: "The user name can only contain letters and spaces"},
                        validated: {...prevState.validated, [name]: false}
                    }))
                } else {
                     this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: ""},
                        validated: {...prevState.validated, [name]: true}
                    }))
                }
                break;

            case 'userGender':
                let userGenderValid = ["Male", "Female", "Non-binary"].includes(value);
                if (!userGenderValid) {
                    this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: `${value} it's not valid gender`},
                        validated: {...prevState.validated, [name]: false}
                    }))
                } else {
                    this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: ""},
                        validated: {...prevState.validated, [name]: true}
                    }))
                }
                break;

            case 'userCreditCard':
                let cardNumber = value.replace(/\s+/g, '');
                let userCreditCardValid = validateCardNumber(cardNumber);
                if (!userCreditCardValid) {
                    this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: "This card is not valid"},
                        validated: {...prevState.validated, [name]: false}
                    }))
                } else {
                    this.setState((prevState) => ({
                        errors: {...prevState.errors, [name]: ""},
                        validated: {...prevState.validated, [name]: true}
                    }))
                }
                break;

            default:
                break;
        }
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
                    this.setState((prevState) => ({...prevState, ...initState, showSuccessMessage: true}));
                }
            );
        }
    };

    handleMessageClose = (event, reason) => {
        console.log(reason);
        if (reason === 'clickaway') {
            return;
        }

        this.setState({showSuccessMessage: false});
    };

    render() {
        return (
            <div className="Registration">
                <h1 className="Registration-Heading">Registration</h1>
                <form className="Registration-Form">
                    <TextField
                        className="Registration-TextField"
                        name="userName"
                        value={this.state.user.userName}
                        onFocus={this.clearError}
                        onChange={this.handleChange}
                        onBlur={this.validateField}
                        label="User name"
                        variant="outlined"
                        error={!!this.state.errors.userName.length}
                        helperText={this.state.errors.userName}
                    />

                    <FormControl
                        className="Registration-TextField"
                        variant="outlined"
                        error={!!this.state.errors.userGender.length}
                    >
                        <InputLabel id="userGenderLabel">Gender</InputLabel>

                        <Select
                            labelId="userGenderLabel"
                            id="userGender"
                            name="userGender"
                            value={this.state.user.userGender}
                            onFocus={this.clearError}
                            onChange={this.handleChange}
                            onBlur={this.validateField}
                            label="Gender"
                        >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Non-binary"}>Non-binary</MenuItem>
                        </Select>
                        <FormHelperText>{this.state.errors.userGender}</FormHelperText>
                    </FormControl>

                    <TextField
                        className="Registration-TextField"
                        name="userCreditCard"
                        value={this.state.user.userCreditCard}
                        onFocus={this.clearError}
                        onChange={this.handleChange}
                        onBlur={this.validateField}
                        label="Credit Card"
                        variant="outlined"
                        InputProps={{
                            inputComponent: CardInput
                        }}
                        helperText={this.state.errors.userCreditCard}
                        error={!!this.state.errors.userCreditCard.length}
                    />

                    <FormControlLabel
                        className="Registration-Switch"
                        control={
                            <Switch
                                checked={this.state.user.withLoyaltyProgram}
                                onChange={this.handleChange}
                                name="withLoyaltyProgram"
                            />}
                        label="Loyalty Program"
                        labelPlacement="end"
                    />
                    <Transition
                        in={this.state.user.withLoyaltyProgram}
                        timeout={this.inputTransitionDuration}
                        mountOnEnter={true}
                        unmountOnExit={true}
                    >
                        {state => (
                            <TextField
                                className="Registration-TextField"
                                name="userCoupon"
                                value={this.state.user.userCoupon}
                                onChange={this.handleChange}
                                label="Coupon"
                                variant="outlined"
                                style={{
                                    ...this.inputDefaultStyle,
                                    ...this.inputTransitionStyles[state]
                                }}
                            />
                        )}
                    </Transition>

                    <Button
                        className="Registration-Button"
                        onClick={this.handleSubmit}
                        variant="contained"
                    >
                        Create user
                    </Button>
                </form>

                <Snackbar
                    open={this.state.showSuccessMessage}
                    onClose={this.handleMessageClose}
                    message="I love snacks"
                >
                    <Alert
                        onClose={this.handleMessageClose}
                        severity="success"
                        elevation={6}
                        variant="filled"
                    >
                        User created successfully!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default Registration;
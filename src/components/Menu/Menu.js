import React, {Component} from "react";
import {Transition} from "react-transition-group";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import Portal from "@material-ui/core/Portal";
import { NavLink } from "react-router-dom";

import './Menu.scss';

class Menu extends Component {
    targetRef = React.createRef();

    duration = this.props.duration || 300;

    defaultStyle = {
        transition: `all ${this.duration}ms ease-in-out`,
        opacity: 0,
    }

    transitionStyles = {
        entering: { opacity: 0, marginLeft: -360 },
        entered:  { opacity: 1, marginLeft: 0 },
        exiting:  { opacity: 0, marginLeft: -360 },
        exited:   { opacity: 1, marginLeft: 0 }
    };

    render() {
        return(
            <Portal>
                <Transition
                    in={this.props.open}
                    timeout={this.duration}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    onEntering={() => disableBodyScroll(this.targetRef.current)}
                    onExiting={() => enableBodyScroll(this.targetRef.current)}
                >
                    {state => (
                        <div
                            className="Menu"
                            ref={this.targetRef}
                            style={{
                                ...this.defaultStyle,
                                ...this.transitionStyles[state]
                            }}
                        >
                            <nav className="Menu-Navigation">
                                <ul className="Menu-NavList">
                                    <li className="Menu-NavItem">
                                        <NavLink to="/add-user" className="Menu-NavLink" onClick={this.props.handleClose}>Registration</NavLink>
                                    </li>
                                    <li className="Menu-NavItem">
                                        <NavLink to="/user-list" className="Menu-NavLink" onClick={this.props.handleClose}>Users list</NavLink>
                                    </li>
                                    <li className="Menu-NavItem">
                                        <NavLink to="/about-me" className="Menu-NavLink" onClick={this.props.handleClose}>About author</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        )}
                </Transition>
            </Portal>
        )
    }
}

export default Menu;
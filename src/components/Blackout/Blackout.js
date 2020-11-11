import React, {Component} from "react";
import {Transition} from "react-transition-group";
import Portal from "@material-ui/core/Portal";

import './Blackout.scss'

class Blackout extends Component {
    duration = this.props.duration || 300;

    defaultStyle = {
        transition: `all ${this.duration}ms ease-in-out`,
        opacity: 0,
    }

    transitionStyles = {
        entering: { opacity: 0 },
        entered:  { opacity: 0.5 },
        exiting:  { opacity: 0 },
        exited:   { opacity: 0.5 }
    };

    render() {
        return(
            <Portal>
                <Transition
                    in={this.props.open}
                    timeout={this.duration}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    {state => (
                        <div
                            className="Blackout"
                            ref={this.targetRef}
                            style={{
                                ...this.defaultStyle,
                                ...this.transitionStyles[state]
                            }}
                        />
                    )}
                </Transition>
            </Portal>
        )
    }
}

export default Blackout;
import React from "react";
import {Transition} from "react-transition-group";
import Portal from "@material-ui/core/Portal";
import './Blackout.scss'

const Blackout = ({ open, duration = 300 }) => {
    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered:  { opacity: 0.5 },
        exiting:  { opacity: 0 },
        exited:   { opacity: 0.5 }
    };

    return(
        <Portal>
            <Transition
                in={open}
                timeout={duration}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {state => (
                    <div
                        className="Blackout"
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    />
                )}
            </Transition>
        </Portal>
    )
}

export default Blackout;
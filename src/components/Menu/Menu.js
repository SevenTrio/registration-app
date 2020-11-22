import React from "react";
import {Transition} from "react-transition-group";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import Portal from "@material-ui/core/Portal";
import './Menu.scss';

import Navigation from '../Navigation/Navigation'

const Menu = ({ open, handleClose, duration = 300 }) => {
    const targetRef = React.createRef();

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0, marginLeft: -360 },
        entered:  { opacity: 1, marginLeft: 0 },
        exiting:  { opacity: 0, marginLeft: -360 },
        exited:   { opacity: 1, marginLeft: 0 }
    };

    return(
        <Portal>
            <Transition
                in={open}
                timeout={duration}
                mountOnEnter={true}
                unmountOnExit={true}
                onEntering={() => disableBodyScroll(targetRef.current)}
                onExiting={() => enableBodyScroll(targetRef.current)}
            >
                {state => (
                    <div
                        className="Menu"
                        ref={targetRef}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <Navigation className="Menu-Navigation" handleClose={handleClose}/>
                    </div>
                )}
            </Transition>
        </Portal>
    )
}

export default Menu;
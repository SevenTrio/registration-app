import React from 'react';
import InputMask from 'react-input-mask';

const CardInput = (props) => {
    return <InputMask {...props} mask="9999 9999 9999 9999" maskChar=" " />;
}

export default CardInput;
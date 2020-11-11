import React from 'react';
import InputMask from 'react-input-mask';

class CardInput extends React.Component {
    render() {
        return <InputMask {...this.props} mask="9999 9999 9999 9999" maskChar=" " />;
    }
}

export default CardInput;
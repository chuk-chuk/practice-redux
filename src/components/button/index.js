
import React from 'react'; 
import PropTypes from 'prop-types';

/**
 * A generic button component that does stuff when you click it.
 */
const Button = ({ disabled, onClick, type }) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            Replace value
        </button>
    );
};

Button.displayName = 'Button';

Button.defaultProps = {
    type: 'button',
    onClick: () => {}
};

Button.propTypes = {
    /**
     * Callback that gets called when the onClick event is triggered.
     */
    onClick: PropTypes.func,
    /**
     * Determines the type of the button element.
     */
    type: PropTypes.string,
    disabled: PropTypes.bool

};

export default Button;
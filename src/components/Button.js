import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/button.scss';

const Button = (props) => {
    return (
        <div className="control-button" onClick={props.onClick}>
            {props.label}
        </div>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired
};

Button.defaultProps = {
    onClick: function () {
    }
};

export default Button;
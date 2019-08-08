import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => <button>{text}</button>;

Button.defaultProps = {
  text: 'Button'
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button;

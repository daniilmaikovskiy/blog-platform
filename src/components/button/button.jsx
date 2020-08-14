import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.scss';

const Button = ({ className, text, tabIndex }) => {
  return (
    <button type="button" className={[classes.wrapper, className].join(' ')} tabIndex={tabIndex}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  tabIndex: 0,
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
};

export default Button;

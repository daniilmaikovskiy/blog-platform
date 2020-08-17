import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.scss';

const Button = ({ className, text, tabIndex, onClick }) => {
  return (
    <button
      type="button"
      className={[classes.wrapper, className].join(' ')}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  tabIndex: 0,
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
};

export default Button;

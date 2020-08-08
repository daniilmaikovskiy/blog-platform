import React from 'react';
import PropTypes from 'prop-types';
import classes from './text-input.module.scss';

const TextInput = ({ signature, placeholder, className }) => {
  return (
    <label className={[classes.textInput, className].join(' ')}>
      <span>{signature}</span>
      <input type="text" placeholder={placeholder} />
    </label>
  );
};

TextInput.defaultProps = {
  signature: '',
  placeholder: '',
  className: '',
};

TextInput.propTypes = {
  signature: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;

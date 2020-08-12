import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './text-input.module.scss';

const TextInput = forwardRef(({ signature, placeholder, className, name, type }, ref) => {
  return (
    <label className={[classes.textInput, className].join(' ')}>
      <span>{signature}</span>
      <input type={type} placeholder={placeholder} name={name} ref={ref} />
    </label>
  );
});

TextInput.defaultProps = {
  signature: '',
  placeholder: '',
  className: '',
  type: 'text',
};

TextInput.propTypes = {
  signature: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextInput;

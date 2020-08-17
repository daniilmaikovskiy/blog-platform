import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './text-input.module.scss';

const TextInput = forwardRef(({ signature, className, ...rest }, ref) => {
  return (
    <label className={[classes.textInput, className].join(' ')}>
      <span>{signature}</span>
      <input {...rest} ref={ref} />
    </label>
  );
});

TextInput.defaultProps = {
  signature: '',
  className: '',
};

TextInput.propTypes = {
  signature: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;

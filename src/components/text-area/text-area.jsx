import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './text-area.module.scss';

const TextArea = forwardRef(({ signature, placeholder, className, name, onChange }, ref) => {
  return (
    <label className={[classes.textInput, className].join(' ')}>
      <span>{signature}</span>
      <textarea placeholder={placeholder} name={name} onChange={onChange} ref={ref} />
    </label>
  );
});

TextArea.defaultProps = {
  signature: '',
  placeholder: '',
  className: '',
  onChange: () => {},
};

TextArea.propTypes = {
  signature: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TextArea;

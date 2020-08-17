import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './text-area.module.scss';

const TextArea = forwardRef(({ signature, className, ...rest }, ref) => {
  return (
    <label className={[classes.textInput, className].join(' ')}>
      <span>{signature}</span>
      <textarea {...rest} ref={ref} />
    </label>
  );
});

TextArea.defaultProps = {
  signature: '',
  className: '',
};

TextArea.propTypes = {
  signature: PropTypes.string,
  className: PropTypes.string,
};

export default TextArea;

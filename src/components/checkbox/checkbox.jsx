import React from 'react';
import PropTypes from 'prop-types';
import classes from './checkbox.module.scss';

const Checkbox = ({ className, ...rest }) => {
  return (
    <div className={[classes.wrapper, className].join(' ')}>
      <input type="checkbox" {...rest} />
      <div />
    </div>
  );
};

Checkbox.defaultProps = {
  className: '',
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;

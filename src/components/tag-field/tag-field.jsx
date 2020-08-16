import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './tag-field.module.scss';
import TextInput from '../text-input';
import Button from '../button';

const TagField = forwardRef(({ className, signature, name, isLast }, ref) => {
  return (
    <div className={[classes.wrapper, className].join(' ')}>
      <TextInput
        className={classes.tag}
        name={name}
        type="text"
        signature={signature}
        placeholder="Tag"
        ref={ref}
      />
      <Button className={classes.delete} text="Delete" />
      {isLast && <Button className={classes.btn} text="Add tag" />}
    </div>
  );
});

TagField.defaultProps = {
  signature: '',
  className: '',
  isLast: false,
};

TagField.propTypes = {
  signature: PropTypes.string,
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  className: PropTypes.string,
};

export default TagField;

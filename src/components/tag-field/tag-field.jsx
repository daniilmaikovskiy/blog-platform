import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './tag-field.module.scss';
import TextInput from '../text-input';
import Button from '../button';

const TagField = forwardRef(
  ({ className, isLast, mayBeDeleted, onDelete, onAdd, ...rest }, ref) => {
    return (
      <div className={[classes.wrapper, className].join(' ')}>
        <TextInput className={classes.tag} type="text" placeholder="Tag" {...rest} ref={ref} />
        {mayBeDeleted && <Button className={classes.delete} text="Delete" onClick={onDelete} />}
        {isLast && <Button className={classes.btn} text="Add tag" onClick={onAdd} />}
      </div>
    );
  }
);

TagField.defaultProps = {
  className: '',
  isLast: false,
  mayBeDeleted: false,
  onAdd: () => {},
  onDelete: () => {},
};

TagField.propTypes = {
  isLast: PropTypes.bool,
  mayBeDeleted: PropTypes.bool,
  className: PropTypes.string,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TagField;

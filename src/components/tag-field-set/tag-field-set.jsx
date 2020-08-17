import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classes from './tag-field-set.module.scss';
import TagField from '../tag-field';

const TagFieldSet = forwardRef(({ className, addTag, deleteTag, tagsInfo, changeTag }, ref) => {
  const keysArr = Array.from(tagsInfo.keys());

  const tags = keysArr.map((key, i, arr) => (
    <TagField
      key={key}
      className={classes.tag}
      name={`tagList[${i}]`}
      signature={i === 0 ? 'Tags' : ''}
      isLast={i === arr.length - 1}
      mayBeDeleted={arr.length > 1}
      value={tagsInfo.get(key)}
      ref={ref}
      onChange={(evt) => changeTag(key, evt.target.value)}
      onDelete={() => deleteTag(key)}
      onAdd={addTag}
    />
  ));

  return <div className={className}>{tags}</div>;
});

TagFieldSet.defaultProps = {
  className: '',
};

TagFieldSet.propTypes = {
  className: PropTypes.string,
  tagsInfo: PropTypes.objectOf(Map).isRequired,
  addTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  changeTag: PropTypes.func.isRequired,
};

export default TagFieldSet;

import React from 'react';
import PropTypes from 'prop-types';
import classes from './like-button.module.scss';
import likeheartImg from '../../img/likeheart.svg';
import likedLikeheartImg from '../../img/liked-likeheart.svg';

const LikeButton = ({ favorited, favoritesCount, ...rest }) => {
  const heartImage = favorited ? likedLikeheartImg : likeheartImg;

  return (
    <button type="button" className={classes.wrapper} {...rest}>
      <img src={heartImage} alt="like" />
      <span className={classes.number}>{favoritesCount}</span>
    </button>
  );
};

LikeButton.defaultProps = {
  favorited: false,
  favoritesCount: 0,
};

LikeButton.propTypes = {
  favorited: PropTypes.bool,
  favoritesCount: PropTypes.number,
};

export default LikeButton;

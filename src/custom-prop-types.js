import PropTypes from 'prop-types';

const articleType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  tagList: PropTypes.arrayOf(String).isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
    bio: PropTypes.string,
    image: PropTypes.string,
    following: PropTypes.bool.isRequired,
  }).isRequired,
  favorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired,
});

const CustomPropTypes = {
  articleType,
};

export default CustomPropTypes;

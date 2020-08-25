import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { Tag } from 'antd';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import {
  wrapper,
  main,
  authorBlock,
  author,
  date,
  titleBlock,
  title,
  tag,
  description,
  tagBlock,
  authorBlockText,
  firstVisible,
} from './article.module.scss';
import avatarImg from '../../img/avatar.png';
import { ROOT } from '../../global-settings';
import LikeButton from '../like-button';
import actions from '../../actions';
import RealworldServiceContext from '../realworld-service-context';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const Article = ({ data, isLogged }) => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  const tags = data.tagList.map((el) => (
    <Tag key={el} className={tag}>
      {el}
    </Tag>
  ));

  return (
    <article className={wrapper}>
      <section className={firstVisible}>
        <section className={main}>
          <div className={titleBlock}>
            <Link className={title} to={`${ROOT}/articles/${data.slug}/`}>
              {data.title}
            </Link>
            <LikeButton
              favorited={data.favorited}
              favoritesCount={data.favoritesCount}
              onClick={() => {
                if (isLogged) {
                  dispatch(actions.likeButtonOnClick(realworldService, data.slug, data.favorited));
                }
              }}
            />
          </div>
          <div className={tagBlock}>{tags}</div>
          <div className={description}>{data.description}</div>
        </section>
        <section className={authorBlock}>
          <div className={authorBlockText}>
            <span className={author}>{data.author.username}</span>
            <span className={date}>{formatDate(new Date(data.createdAt))}</span>
          </div>
          <img
            src={data.author.image ? data.author.image : avatarImg}
            alt=""
            width="46"
            height="46"
          />
        </section>
      </section>
    </article>
  );
};

Article.propTypes = {
  data: CustomPropTypes.articleType.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Article;

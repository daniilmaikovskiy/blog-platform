import React from 'react';
import PropTypes from 'prop-types';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import {
  wrapper,
  main,
  authorBlock,
  author,
  date,
  titleBlock,
  title,
  likeBlock,
  likeNumber,
  tag,
  description,
  tagBlock,
  authorBlockText,
  firstVisible,
} from './article-item.module.scss';
import likeheartImg from '../../img/likeheart.svg';
import avatarImg from '../../img/avatar.png';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const ArticleItem = ({ id }) => {
  return (
    <article className={wrapper}>
      <section className={firstVisible}>
        <section className={main}>
          <div className={titleBlock}>
            <Link className={title} to={`/articles/${id}`}>
              Some article title
            </Link>
            <div className={likeBlock}>
              <img src={likeheartImg} alt="like" />
              <span className={likeNumber}>12</span>
            </div>
          </div>
          <div className={tagBlock}>
            <Tag className={tag}>Tag1</Tag>
            <Tag className={tag}>SomeTag</Tag>
          </div>
          <div className={description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </section>
        <section className={authorBlock}>
          <div className={authorBlockText}>
            <span className={author}>John Doe</span>
            <span className={date}>{formatDate(new Date())}</span>
          </div>
          <img src={avatarImg} alt="" width="46" height="46" />
        </section>
      </section>
    </article>
  );
};

ArticleItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ArticleItem;

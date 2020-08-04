import React from 'react';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import CustomPropTypes from '../../custom-prop-types';
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
} from './article.module.scss';
import likeheartImg from '../../img/likeheart.svg';
import avatarImg from '../../img/avatar.png';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const Article = ({ data }) => {
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
            <Link className={title} to={`/articles/${data.slug}`}>
              {data.title}
            </Link>
            <div className={likeBlock}>
              <img src={likeheartImg} alt="like" />
              <span className={likeNumber}>{data.favoritesCount}</span>
            </div>
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
};

export default Article;

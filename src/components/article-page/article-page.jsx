import React, { createElement, useContext, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import marksy from 'marksy';
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
  body,
} from './article-page.module.scss';
import likeheartImg from '../../img/likeheart.svg';
import avatarImg from '../../img/avatar.png';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const ArticlePage = ({ slug }) => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const compile = useCallback(marksy({ createElement }), []);

  useEffect(() => {
    dispatch(actions.articlePageLoading(realworldService, slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector(({ currentArticlePage }) => currentArticlePage);

  if (data === null) {
    return null;
  }

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
      <section className={body}>{compile(data.body).tree}</section>
    </article>
  );
};

ArticlePage.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ArticlePage;

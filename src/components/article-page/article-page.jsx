import React, { createElement, useContext, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { Link, withRouter } from 'react-router-dom';
import { Tag, Button as AntdButton } from 'antd';
import marksy from 'marksy';
import Cookies from 'js-cookie';
import classes from './article-page.module.scss';
import avatarImg from '../../img/avatar.png';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import { ROOT, USER_DATA_COOKIE_NAME } from '../../global-settings';
import selectors from '../../selectors';
import Button from '../button';
import LikeButton from '../like-button';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const ArticlePage = ({ slug, history }) => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const compile = useCallback(marksy({ createElement }), []);

  const data = useSelector(selectors.currentArticlePage);
  const error = useSelector(selectors.articlePageLoadingError);
  const errorMessage = useSelector(selectors.articlePageLoadingErrorMessage);
  const loading = useSelector(selectors.articlePageOnLoading);
  const isLogged = useSelector(selectors.isLogged);
  const deletingArticleError = useSelector(selectors.deletingArticleLoadingError);
  const deletingArticleErrorMessage = useSelector(selectors.deletingArticleErrorMessage);
  const deletingArticleLoading = useSelector(selectors.deletingArticleLoading);
  const isClickedDelete = useSelector(selectors.articlePageDeleteModalWindowIsShowed);

  useEffect(() => {
    dispatch(actions.articlePageLoading(realworldService, slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let username;

  if (isLogged) {
    try {
      const { user } = JSON.parse(Cookies.get(USER_DATA_COOKIE_NAME));
      username = user.username;
    } catch {
      dispatch(actions.logouting());
      return null;
    }
  }

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (deletingArticleError) {
    return <ErrorAlert description={deletingArticleErrorMessage} />;
  }

  if (loading || deletingArticleLoading) {
    return <Spinner />;
  }

  if (data === null) {
    return <ErrorAlert description="Server Error" />;
  }

  const buttonsClasses = [classes.buttons];

  if (!isLogged || username !== data.author.username) {
    buttonsClasses.push(classes.hidden);
  }

  const tags = data.tagList.map((el) => (
    <Tag key={el} className={classes.tag}>
      {el}
    </Tag>
  ));

  return (
    <article className={classes.wrapper}>
      <section className={classes.firstVisible}>
        <section className={classes.main}>
          <div className={classes.titleBlock}>
            <Link className={classes.title} to={`${ROOT}/articles/${data.slug}/`}>
              {data.title}
            </Link>
            <LikeButton
              favorited={data.favorited}
              favoritesCount={data.favoritesCount}
              onClick={() =>
                dispatch(
                  actions.likeButtonOnClick(realworldService, data.slug, data.favorited, true)
                )
              }
            />
          </div>
          <div className={classes.tagBlock}>{tags}</div>
          <div className={classes.description}>{data.description}</div>
        </section>
        <section className={classes.sideBlock}>
          <div className={classes.authorBlock}>
            <div className={classes.authorBlockText}>
              <span className={classes.author}>{data.author.username}</span>
              <span className={classes.date}>{formatDate(new Date(data.createdAt))}</span>
            </div>
            <img
              src={data.author.image ? data.author.image : avatarImg}
              alt=""
              width="46"
              height="46"
            />
          </div>
          <div className={buttonsClasses.join(' ')}>
            <Button
              className={classes.delete}
              text="Delete"
              onClick={() => {
                dispatch(actions.articlePageShowDeleteModalWindow());
              }}
            />
            {isClickedDelete && (
              <div className={classes.modal}>
                <div className={classes.modalAlert}>
                  <div className={classes.alertSymbol}>!</div>
                  <div className={classes.alertMessage}>Are you sure to delete this article?</div>
                </div>
                <div className={classes.modalButtons}>
                  <AntdButton
                    size="small"
                    onClick={() => {
                      dispatch(actions.articlePageHideDeleteModalWindow());
                    }}
                  >
                    No
                  </AntdButton>
                  <AntdButton
                    className={classes.modalButtonYes}
                    size="small"
                    type="primary"
                    onClick={() => {
                      dispatch(actions.deletingArticle(realworldService, slug));
                      history.push(`${ROOT}/articles/`);
                    }}
                  >
                    Yes
                  </AntdButton>
                </div>
              </div>
            )}
            <Link to={`${ROOT}/articles/${data.slug}/edit`} tabIndex={-1}>
              <Button className={classes.edit} text="Edit" />
            </Link>
          </div>
        </section>
      </section>
      <section className={classes.body}>{compile(data.body).tree}</section>
    </article>
  );
};

ArticlePage.propTypes = {
  slug: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(ArticlePage);

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { wrapper } from './app.module.scss';
import Header from '../header';
import Articles from '../articles';
import ArticlePage from '../article-page';
import { ROOT } from '../../global-settings';
import SignUp from '../sign-up';
import SignIn from '../sign-in';
import EditProfile from '../edit-profile';
import actions from '../../actions';
import CreateArticlePage from '../create-article-page';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.checkUsersAuthentication());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className={wrapper} style={{ minHeight: document.body.clientHeight }}>
        <Header />
        <Route path={`${ROOT}/`} exact component={Articles} />
        <Route path={`${ROOT}/articles/`} exact component={Articles} />
        <Route
          path={`${ROOT}/articles/:slug`}
          render={({ match }) => <ArticlePage slug={match.params.slug} />}
        />
        <Route path={`${ROOT}/sign-up`} component={SignUp} />
        <Route path={`${ROOT}/sign-in`} component={SignIn} />
        <Route path={`${ROOT}/profile`} component={EditProfile} />
        <Route path={`${ROOT}/new-article`} component={CreateArticlePage} />
        <Route
          path={`${ROOT}/logout`}
          render={() => {
            dispatch(actions.logouting());
            return <Redirect to={`${ROOT}/sign-in`} />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;

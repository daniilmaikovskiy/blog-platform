import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { wrapper } from './app.module.scss';
import Header from '../header';
import Articles from '../articles';
import ArticlePage from '../article-page';
import { ROOT } from '../../global-settings';
import SignUp from '../sign-up';

const App = () => {
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
      </div>
    </Router>
  );
};

export default App;

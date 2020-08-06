import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { wrapper } from './app.module.scss';
import Header from '../header';
import Articles from '../articles';
import ArticlePage from '../article-page';
import { ROOT } from '../../global-settings';

const App = () => {
  return (
    <Router>
      <div className={wrapper} style={{ minHeight: window.innerHeight }}>
        <Header />
        <Route path={`${ROOT}/`} exact component={Articles} />
        <Route path={`${ROOT}/articles/`} exact component={Articles} />
        <Route
          path={`${ROOT}/articles/:slug`}
          render={({ match }) => <ArticlePage slug={match.params.slug} />}
        />
      </div>
    </Router>
  );
};

export default App;

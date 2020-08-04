import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { wrapper } from './app.module.scss';
import Header from '../header';
import Articles from '../articles';
import Article from '../article';

const App = () => {
  return (
    <Router>
      <div className={wrapper} style={{ minHeight: window.innerHeight }}>
        <Header />
        <Route path="/" exact component={Articles} />
        <Route path="/articles/" exact component={Articles} />
        <Route
          path="/articles/:id"
          render={({ match }) => {
            const { id } = match.params;

            return <Article id={id} isExtended />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;

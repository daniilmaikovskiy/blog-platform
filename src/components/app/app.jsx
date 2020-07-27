import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { wrapper } from './app.module.scss';
import Header from '../header';
import Articles from '../articles';

const App = () => {
  return (
    <Router>
      <div className={wrapper} style={{ minHeight: window.innerHeight }}>
        <Header />
        <Articles />
      </div>
    </Router>
  );
};

export default App;

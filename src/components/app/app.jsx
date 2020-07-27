import React from 'react';
import { wrapper } from './app.module.scss';
import Header from '../header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className={wrapper} style={{ minHeight: window.innerHeight }}>
        <Header />
        
      </div>
    </Router>
  );
};

export default App;

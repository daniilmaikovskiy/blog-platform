import React from 'react';
import { wrapper, greeting, signature } from './app.module.scss';

const App = () => {
  return (
    <div className={wrapper} style={{ minHeight: window.innerHeight }}>
      <h1 className={greeting}>Welcome to my react-app-template</h1>
      <span className={signature}>Author: daniil maikovskiy</span>
    </div>
  );
};

export default App;

import React from 'react';
import { wrapper } from './app.module.scss';

const App = () => {
  return (
    <div className={wrapper} style={{ minHeight: window.innerHeight }} />
  );
};

export default App;

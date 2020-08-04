import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'antd/dist/antd.css';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import reducer from './reducer/reducer';
import RealworldServiceContext from './components/realworld-service-context';
import RealworldService from './services/realworld-service';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));
const realworldService = new RealworldService();

ReactDOM.render(
  <Provider store={store}>
    <RealworldServiceContext.Provider value={realworldService}>
      <App />
    </RealworldServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);

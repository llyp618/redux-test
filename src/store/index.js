import * as reducers from './reducers';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// chrome redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  { number: 1 },
  composeEnhancers(
    // applyMiddleware 用于注册中间件
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(mySaga);

export default store;

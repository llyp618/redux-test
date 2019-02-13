import * as reducers from './reducers'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// chrome redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers(reducers),
    {number: 1},
    composeEnhancers(
      // applyMiddleware 用于注册中间件
      applyMiddleware(thunk)
    )
)

export default store
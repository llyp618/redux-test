import * as reducers from './reducers'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers(reducers),
    // applyMiddleware 用于注册中间件
    applyMiddleware(thunk)
)

export default store
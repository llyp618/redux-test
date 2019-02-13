import * as reducers from './reducers'
import {combineReducers, createStore, compose} from 'redux'

// chrome redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers(reducers),
    {number: 1},
    composeEnhancers()
)

export default store
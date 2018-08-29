import * as reducers from './reducers'
import {combineReducers, createStore} from 'redux'

const store = createStore(combineReducers(reducers),{number:10})

export default store
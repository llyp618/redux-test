import {  put, takeEvery, delay } from 'redux-saga/effects'


function* asyncMinus(action) {
  yield delay(1000)
  yield put({type: 'MINUS', payload: action.payload})
}

function* asyncAdd(action) {
  yield delay(1000)
  yield put({type: 'ADD', payload: action.payload})
}

function* mySaga(){
  yield takeEvery('ASYNCMINUS', asyncMinus)
  yield takeEvery('ASYNCADD', asyncAdd)
}

export default mySaga
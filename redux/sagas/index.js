import { } from 'redux-saga/effects'
import tasksSaga from './tasks'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(tasksSaga)
  
}
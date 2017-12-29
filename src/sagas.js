import { takeEvery, put, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { incYear, INCREASE_YEAR_ASYNC } from './actions'

export function* incrementDataAsync() {
  // delay is a promised setTimeout
  yield delay(1000);
  yield put(incYear());
  // equals to yield put({ type: DECREASE_YEAR });
}


export function* watchIncrementDataAsync() {
  yield takeEvery(INCREASE_YEAR_ASYNC, incrementDataAsync)
}

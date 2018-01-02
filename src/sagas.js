import { takeEvery, put, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { incYear, INCREASE_YEAR_ASYNC, addTodoAll, GET_TASK_ALL_ASYNC } from './actions';

export function* incrementDataAsync() {
  // delay is a promised setTimeout
  yield delay(1000);
  yield put(incYear());
  // equals to yield put({ type: DECREASE_YEAR });
}

export function* watchIncrementDataAsync() {
  yield takeEvery(INCREASE_YEAR_ASYNC, incrementDataAsync)
}

export function* updateTasks() {
  const todos = yield fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(data => data.json());

  yield put(addTodoAll(todos.map(todo => todo.title)));
  // equals to yield put({ type: ADD_TASK_ALL, todos });
}

export function* watchTasksAsync() {
  yield takeEvery(GET_TASK_ALL_ASYNC, updateTasks)
}

export function* rootSaga() {
  yield all([
    watchIncrementDataAsync(),
    watchTasksAsync()
  ]);
}

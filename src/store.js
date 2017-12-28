import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import { testSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers(reducers);

export const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(testSaga);

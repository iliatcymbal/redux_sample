import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import { watchIncrementDataAsync } from './sagas'

// we use compose function for advanced creation of middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers(reducers);

export const store = createStore(
  rootReducers,
  // integrate middleware to store
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run sagas
sagaMiddleware.run(watchIncrementDataAsync);

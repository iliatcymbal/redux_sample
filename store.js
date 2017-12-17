import { createStore, combineReducers } from 'redux';
import { INCREASE_YEAR, DECREASE_YEAR, ADD_TASK } from './actions';

// it is typical reducer
// action should be an object with next pattern:
// { type: 'ACTION_NAME', payload?: any_js_value }
const date = (state = new Date().getFullYear(), action) => {
  switch (action.type) {
    case INCREASE_YEAR: {
      return state + 1;
    }

    case DECREASE_YEAR:
      return state - 1;
  }

  return state;
};

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newState = [...state, action.task];
      return newState;
    }
  }

  return state;
};


const reducers = combineReducers({
  date,
  todo
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// second argument is used to add redux dev tool (should be pre-installed in browser)

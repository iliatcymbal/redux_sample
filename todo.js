import { store } from './store';

export const fieldAdd = document.createElement('input');
fieldAdd.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    store.dispatch({ type: 'ADD_TASK', task: event.target.value });
    event.target.value = '';
  }
});
fieldAdd.placeholder = 'Enter a task title';

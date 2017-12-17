import { store } from './store';
import { addTodo } from './actions';

export const fieldAdd = document.createElement('input');
fieldAdd.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    store.dispatch(addTodo(event.target.value));
    event.target.value = '';
  }
});
fieldAdd.placeholder = 'Enter a task title';

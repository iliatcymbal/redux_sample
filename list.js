import { store } from './store';

export const list = document.createElement('ul');

const update = () => {
  const value = store.getState();
  let items = '';

  value.todo.forEach(task => items += `<li>${task}</li>`);
  list.innerHTML = items;
};

store.subscribe(update);

import { store } from './store';

export const info = document.createElement('p');

const update = () => {
  const value = store.getState();
  info.textContent = value.date;
};

store.subscribe(update);
update();

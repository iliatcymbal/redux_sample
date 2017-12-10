import { store } from './store';

export const info = document.createElement('p');

store.subscribe(() => {
    const value = store.getState();
    info.textContent = value;
});

import { store } from './store';

export const buttonInc = document.createElement('button');
buttonInc.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_YEAR' });
});
buttonInc.textContent = 'Increase year';

export const buttonDec = document.createElement('button');
buttonDec.addEventListener('click', () => {
    store.dispatch({ type: 'DECREASE_YEAR' });
});
buttonDec.textContent = 'Decrease year';

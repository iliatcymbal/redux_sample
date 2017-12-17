import { store } from './store';
import { decYear, incYear } from './actions';

export const buttonInc = document.createElement('button');
buttonInc.addEventListener('click', () => {
    store.dispatch(incYear());
});
buttonInc.textContent = 'Increase year';

export const buttonDec = document.createElement('button');
buttonDec.addEventListener('click', () => {
    store.dispatch(decYear());
});
buttonDec.textContent = 'Decrease year';

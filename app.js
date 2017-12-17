import { buttonInc, buttonDec } from './button';
import { info } from './info';
import { fieldAdd } from './todo';
import { list } from './list';

[
  buttonDec,
  buttonInc,
  info,
  fieldAdd,
  list
]
  .forEach(el => document.body.appendChild(el) && document.body.insertAdjacentHTML('beforeend', '<br><br>'));


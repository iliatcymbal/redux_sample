import { store } from './store';
import { decYear, incYear } from './actions';

export const Buttons = () => {
  const click = (add) => {
    if (add) {
      store.dispatch(incYear());
    } else {
      store.dispatch(decYear());
    }
  };

  return (
    <React.Fragment>
      <button onClick={() => click()}>Decrease year</button>&nbsp;&nbsp;
      <button onClick={() => click(true)}>Increase year</button>
    </React.Fragment>
  );
};

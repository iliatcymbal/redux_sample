import { store } from './store';
import { addTodo } from './actions';

export const AddTodo = () => {
  const addTask = (event) => {
    if (event.keyCode === 13) {
      store.dispatch(addTodo(event.target.value));
      event.target.value = '';
    }
  };

  return (
    <p>
      <input
        type="text"
        defaultValue=""
        placeholder="Enter a task title"
        onKeyDown={addTask}
      />
    </p>
  );
};

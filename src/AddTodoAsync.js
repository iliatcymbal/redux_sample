export const AddTodoAsyncComponent = ({ update }) => {
  return (
    <p>
      <button onClick={() => update()}>Get todos</button>
    </p>
  );
};


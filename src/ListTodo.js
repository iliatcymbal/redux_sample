import { store } from './store';

export class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: store.getState().todo
    };

    store.subscribe(() => {
      this.setState({ todo: store.getState().todo });
    });
  }

  render() {
    return (
      <ul>
        {this.state.todo.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    );
  }
}

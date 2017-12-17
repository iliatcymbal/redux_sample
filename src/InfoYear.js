import { store } from './store';

export class InfoYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: store.getState().date
    };

    store.subscribe(() => {
      this.setState({ date: store.getState().date });
    });
  }

  render() {
    return <p>{this.state.date}</p>;
  }
}

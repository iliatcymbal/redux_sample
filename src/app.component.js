import { connect } from 'react-redux';

import { Buttons } from './Buttons';
import { InfoYear } from './InfoYear';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';
import { AddTodoAsync } from './AddTodoAsync';
import { AsyncButtons } from "./AsyncButtons";

import { decYear, incYear, addTodo, addTodoAll, incYearAsync, getTodoAllAsync } from './actions';

export const AppComponent = (props) => (
  <React.Fragment>
    <Buttons update={props.updateDate} />
    <AsyncButtons updateYear={props.incYearAsync} />
    <InfoYear date={props.date} />
    <AddTodo update={props.updateTodo} />
    <AddTodoAsync update={props.getTodoAllAsync} />
    <ListTodo todo={props.todo} />
  </React.Fragment>
);

const mapStateToProps = state => ({
  todo: state.todo,
  date: state.date
});

const mapDispatchToProps = dispatch => ({
  updateDate(add) {
    dispatch(add ? incYear() : decYear());
  },

  updateTodo(value) {
    dispatch(addTodo(value));
  },

  updateTodoAsync() {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(data => data.json())
      .then(tasks => dispatch(addTodoAll(tasks.map(task => task.title))))
  },

  incYearAsync() {
    dispatch(incYearAsync());
  },

  getTodoAllAsync() {
    dispatch(getTodoAllAsync());
  }
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

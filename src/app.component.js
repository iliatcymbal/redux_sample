import { connect } from 'react-redux';

import { Buttons } from './Buttons';
import { InfoYear } from './InfoYear';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';

export const AppComponent = (props) => (
  <React.Fragment>
    <Buttons />
    <InfoYear />
    <AddTodo />
    <ListTodo />
  </React.Fragment>
);

export const App = connect()(AppComponent);

import { connect } from 'react-redux';

import { Buttons } from './Buttons';
import { InfoYear } from './InfoYear';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';

export const AppComponent = (props) => (
  <React.Fragment>
    <Buttons update={props.dispatch}/>
    <InfoYear />
    <AddTodo update={props.dispatch}/>
    <ListTodo />
  </React.Fragment>
);

export const App = connect()(AppComponent);

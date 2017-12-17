import { Buttons } from './Buttons';
import { InfoYear } from './InfoYear';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';

export const App = () => (
  <React.Fragment>
    <Buttons />
    <InfoYear />
    <AddTodo />
    <ListTodo />
  </React.Fragment>
);

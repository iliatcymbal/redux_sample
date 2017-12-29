export const INCREASE_YEAR = 'Make plus one year';
export const DECREASE_YEAR = 'Make minus one year';
export const incYear = () => ({ type: INCREASE_YEAR });
export const decYear = () => ({ type: DECREASE_YEAR });

export const INCREASE_YEAR_ASYNC = 'Make plus one year asynchronously';
export const incYearAsync = () => ({ type: INCREASE_YEAR_ASYNC });

export const ADD_TASK = 'Add new task';
export const addTodo = task => ({ type: ADD_TASK, task });

export const ADD_TASK_ALL = 'Add all tasks';
export const addTodoAll = tasks => ({ type: ADD_TASK_ALL, tasks });

export const GET_TASK_ALL_ASYNC = 'Add all tasks async';
export const getTodoAllAsync = tasks => ({ type: GET_TASK_ALL_ASYNC });

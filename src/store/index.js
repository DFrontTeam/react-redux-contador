import { combineReducers } from './combineReducers';
import { reducerCounter } from './counter/reducer';
import { reducerTodoList } from './todo-list/reducer';

export const reducers = combineReducers({
  counters: reducerCounter,
  todoList: reducerTodoList,
});

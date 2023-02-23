import { reducerCounter } from './counter/reducer';
import { reducerTodoList } from './todo-list/reducer';
import {combineReducers} from 'redux'

export const reducers = combineReducers({
  counters: reducerCounter,
  todoList: reducerTodoList,
});

import { reducerCounter } from './counter/reducer';
import { reducerTodoList } from './todo-list/reducer';
import { reducerTodoListColor } from './todo-list-color/reducer';
import {reducerTodoListThunk} from './todo-list-thunk/reducer'
import { reducerCounterPokemon } from './counter-pokemon/reducer';
import {combineReducers} from 'redux'

export const reducers = combineReducers({
  counters: reducerCounter,
  todoList: reducerTodoList,
  todoListColor: reducerTodoListColor,
  todoListThunk: reducerTodoListThunk,
  countersPokemon: reducerCounterPokemon
});
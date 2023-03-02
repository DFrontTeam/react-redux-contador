import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moveToDo, moveToDone,setPokemon} from '../../store/todo-list-thunk/actions';
import { getAllPokemon} from '../../services/pokemon/getAll';

const TodoListThunk = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoListThunk.todo);
  const doneList = useSelector((state) => state.todoListThunk.done);

  useEffect(()=>{
    getAllPokemon((result)=>dispatch(setPokemon(result)))
  },[])

  const moveToDoHandler = (value) => {
    dispatch(moveToDo(value));
  };

  const moveToDoneHandler = (value) => {
    dispatch(moveToDone(value));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Consíguelos a todos</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <div>
          <h3>Pokemon por capturar</h3>
          <ul>
            {todoList.map((i) => (
              <li>
                <a onClick={() => moveToDoneHandler(i)}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Pokemon capturados</h3>
          <ul>
            {doneList.map((i) => (
              <li>
                <a onClick={() => moveToDoHandler(i)}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListThunk;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {moveToComplete} from '../../store/todo-list-color/actions';

const TodoListColor = () => {
  const dispatch = useDispatch();
  const todoListColor = useSelector((state) => state.todoListColor);

  const moveToCompleteHandler = (value) => {
    dispatch(moveToComplete(value));
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
      <h1>Todo list Colors</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <div>
          <h3>Todo</h3>
          <p>Completa todas las tareas</p>
          <ul>
            {todoListColor.map((i) => (
              <li>
                <a style={{color:i.complete ? 'green' : 'red'}} onClick={() => moveToCompleteHandler(i.name)}>{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListColor;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moveToDo, moveToDone } from '../../store/todo-list/actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todo);
  const doneList = useSelector((state) => state.todoList.done);

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
      <h1>Todo list</h1>
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
          <ul>
            {todoList.map((i) => (
              <li>
                <a onClick={() => moveToDoneHandler(i)}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Done</h3>
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

export default TodoList;

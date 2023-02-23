import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToDo } from '../../store/todo-list/actions';

const TodoList = () => {
  let input = useRef();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todo);
console.log('todoList2',todoList)
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
          <h3>Añade una tarea</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {

                return;
              }
              console.log('input.value',input.value)
              dispatch(addToDo(input.value));
              input.value = '';
            }}
          >
            <input
              ref={(node) => {
                input = node;
              }}
              type="text"
            />
            <button type="submit">Enviar</button>
          </form>
          <p>VALOR: {todoList}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

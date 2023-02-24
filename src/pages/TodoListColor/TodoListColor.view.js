import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moveToDo, moveToDone} from '../../store/todo-list/actions';

const TodoListColor = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todo);
  const doneList = useSelector((state) => state.todoList.done);

  useEffect(()=>{
    console.log('Ejemplo de inmutabilidad: Renderiza')
  },[todoList])

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
            {todoList.map((i) => (
              <li>
                <a style={{color:i.complete ? 'green' : 'red'}} onClick={() => moveToDoneHandler(i)}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListColor;

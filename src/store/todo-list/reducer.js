export const initialStateTodoList = {
  todo: ['Maquetar vista', 'Agregar eventos', 'Hacer tests'],
  done: [],
};

export const actionsTypes = {
  MOVE_TODO: 'MOVE_TODO',
  MOVE_DONE: 'MOVE_DONE',
};

const moveToDone = (state, payload) => {
  const auxToDo = [...state.todo].filter((i) => i !== payload);
  const auxToDone = [...state.done];
  auxToDone.push(payload);

  return {
    todo: auxToDo,
    done: auxToDone,
  };
};

const moveToDo = (state, payload) => {
  const auxToDo = [...state.todo];
  auxToDo.push(payload);
  const auxToDone = [...state.done].filter((i) => i !== payload);
  return {
    todo: auxToDo,
    done: auxToDone,
  };
};

export const reducerTodoList = (state = initialStateTodoList, action) => {
  switch (action.type) {
    case actionsTypes.MOVE_DONE:
      return moveToDone(state, action.payload);
    case actionsTypes.MOVE_TODO:
      return moveToDo(state, action.payload);
    default:
      return state;
  }
};

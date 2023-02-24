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
  const auxToDone = [...state.done,payload];
  return {
    todo: auxToDo,
    done: auxToDone,
  };
};

// EJEMPLO INMUTABILIDAD: BIEN HECHO
const moveToDo = (state, payload) => {
  const auxToDo = [...state.todo,payload];
  const auxToDone = [...state.done].filter((i) => i !== payload);
  return {
    todo: auxToDo,
    done: auxToDone,
  };
};

// EJEMPLO INMUTABILIDAD: MAL HECHO
const moveToDoBad = (state, payload) => {
  console.log(state.todo)
  const auxToDo = state.todo;
  auxToDo.push(payload);
  console.log(auxToDo)
  const auxToDone = state.done.filter((i) => i !== payload);
  console.log(auxToDone)
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
      // return moveToDoBad(state, action.payload);
    default:
      return state;
  }
};

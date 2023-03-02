export const initialStateTodoList = {
  todo: [],
  done: [],
};

export const actionsTypes = {
  MOVE_TODO: 'MOVE_TODO',
  MOVE_DONE: 'MOVE_DONE',
  SET_POKEMON: 'SET_POKEMON',
};

const moveToDone = (state, payload) => {
  console.log('Pokemon por capturar a capturados')
  const auxToDo = [...state.todo].filter((i) => i !== payload);
  console.log(auxToDo)
  const auxToDone = [...state.done,payload];
  console.log(auxToDone)
  return {
    todo: auxToDo,
    done: auxToDone,
  };
};

// EJEMPLO INMUTABILIDAD: BIEN HECHO
const moveToDo = (state, payload) => {
  console.log('Pokemon capturados a por capturar')
  const auxToDo = [...state.todo,payload];
  const auxToDone = [...state.done].filter((i) => i !== payload);
  return {
    todo: auxToDo,
    done: auxToDone,
  };
};

const setPokemon = (state,payload) => {
  return {
    ...state,
    todo: [...payload]
  }
}

export const reducerTodoListThunk = (state = initialStateTodoList, action) => {
  switch (action.type) {
    case actionsTypes.MOVE_DONE:
      return moveToDone(state, action.payload);
    case actionsTypes.MOVE_TODO:
      return moveToDo(state, action.payload);
    case actionsTypes.SET_POKEMON:
      return setPokemon(state, action.payload);
    default:
      return state;
  }
};

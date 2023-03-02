export const initialStateTodoList = {
  pokemon: [],
  caughtPokemon: [],
};

export const actionsTypes = {
  MOVE_POKEMON: 'MOVE_POKEMON',
  MOVE_CAUGHT: 'MOVE_CAUGHT',
  SET_POKEMON: 'SET_POKEMON',
};

const moveToCaught = (state, payload) => {
  console.log('Pokemon por capturar a capturados')
  const auxToPokemon = [...state.pokemon].filter((i) => i !== payload);
  console.log(auxToPokemon)
  const auxToCaught = [...state.caughtPokemon,payload];
  console.log(auxToCaught)
  return {
    pokemon: auxToPokemon,
    caughtPokemon: auxToCaught,
  };
};

// EJEMPLO INMUTABILIDAD: BIEN HECHO
const moveToPokemon = (state, payload) => {
  console.log('Pokemon capturados a por capturar')
  const auxToPokemon = [...state.pokemon,payload];
  const auxToCaught = [...state.caughtPokemon].filter((i) => i !== payload);
  return {
    pokemon: auxToPokemon,
    caughtPokemon: auxToCaught,
  };
};

const setPokemon = (state,payload) => {
  return {
    ...state,
    pokemon: [...payload]
  }
}

export const reducerTodoListThunk = (state = initialStateTodoList, action) => {
  switch (action.type) {
    case actionsTypes.MOVE_CAUGHT:
      return moveToCaught(state, action.payload);
    case actionsTypes.MOVE_POKEMON:
      return moveToPokemon(state, action.payload);
    case actionsTypes.SET_POKEMON:
      return setPokemon(state, action.payload);
    default:
      return state;
  }
};

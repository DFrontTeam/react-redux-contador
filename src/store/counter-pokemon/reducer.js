export const actionsTypes = {
  SET_POKEMON: 'SET_POKEMON',
};

export const initialStateCounterPokemon = {
  pokemonImg: '',
};

const setPokemon = (state,payload) => {
  console.log('reducer',state,payload)
  return {
    pokemonImg: payload
  }
}

export const reducerCounterPokemon = (state = initialStateCounterPokemon, action) => {
  switch (action.type) {
    case actionsTypes.SET_POKEMON:
      return setPokemon(state, action.payload);
    default:
      return state;
  }
};

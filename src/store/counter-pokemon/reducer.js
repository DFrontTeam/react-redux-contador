export const actionsTypes = {
  SET_POKEMON_IMG: 'SET_POKEMON_IMG',
};

export const initialStateCounterPokemon = {
  pokemonImg: '',
};

const setPokemonImg = (state,payload) => {
  console.log('reducer',state,payload)
  return {
    pokemonImg: payload
  }
}

export const reducerCounterPokemon = (state = initialStateCounterPokemon, action) => {
  console.log('ENTRO EN REDUCER')
  switch (action.type) {
    case actionsTypes.SET_POKEMON_IMG:
      return setPokemonImg(state, action.payload);
    default:
      return state;
  }
};

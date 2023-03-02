import { actionsTypes } from './reducer';
export const setPokemonImg = (payload) => {
  return {
    type: actionsTypes.SET_POKEMON_IMG,
    payload,
  };
}
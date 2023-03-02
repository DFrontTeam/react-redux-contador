import { actionTypes } from './reducer';
export const setPokemonImg = (payload) => {
  console.log('action:',payload)
  return {
    type: actionsTypes.SET_POKEMON_IMG,
    payload,
  };
}
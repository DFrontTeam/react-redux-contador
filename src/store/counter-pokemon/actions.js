import { actionTypes } from './reducer';
export const setPokemon = (payload) => {
  console.log('action:',payload)
  return {
    type: actionsTypes.SET_POKEMON,
    payload,
  };
}
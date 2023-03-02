import { actionsTypes } from './reducer';
export const moveToPokemon = (payload) => {
  return {
    type: actionsTypes.MOVE_POKEMON,
    payload,
  };
};

export const moveToCaught = (payload) => {
  return {
    type: actionsTypes.MOVE_CAUGHT,
    payload,
  };
};


export const setPokemon = (payload) => {
  return {
    type: actionsTypes.SET_POKEMON,
    payload,
  };
}
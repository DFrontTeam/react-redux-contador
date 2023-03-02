import { actionTypes } from './reducer';
export const increaseCounter = () => {
  return { type: actionTypes.INCREASE_COUNTER };
};

export const decreaseCounter = () => {
  return { type: actionTypes.DECREASE_COUNTER };
};

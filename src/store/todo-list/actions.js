import { actionsTypes } from './reducer';
export const moveToDo = (payload) => {
  return {
    type: actionsTypes.MOVE_TODO,
    payload,
  };
};

export const moveToDone = (payload) => {
  return {
    type: actionsTypes.MOVE_DONE,
    payload,
  };
};

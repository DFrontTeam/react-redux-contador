

import { actionsTypes } from './reducer';

export const moveToComplete = (payload) => {
  return {
    type: actionsTypes.MOVE_COMPLETE,
    payload,
  };
};

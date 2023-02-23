import { actionsTypes } from './reducer';
export const addToDo = (payload) => {
  console.log('action:',payload)
  return {
    type: actionsTypes.ADD_TODO,
    payload:payload,
  };
};
export const initialStateTodoList = [
  {
    name: 'Maquetar vista',
    complete: false
  },
  {
    name: 'Agregar eventos',
    complete: false
  },
  {
    name: 'Hacer tests',
    complete: false
  } 
];

export const actionsTypes = {
  MOVE_COMPLETE: 'MOVE_COMPLETE',
};

const moveToComplete = (state, payload) => {
  const result = [...state].map((s)=>{
      return {
         ...s,complete: !s.complete ? (s.name === payload ? true : false) : true
      }
  })
  return result
};

export const reducerTodoListColor = (state = initialStateTodoList, action) => {
  switch (action.type) {
    case actionsTypes.MOVE_COMPLETE:
      return moveToComplete(state, action.payload);
    default:
      return state;
  }
};

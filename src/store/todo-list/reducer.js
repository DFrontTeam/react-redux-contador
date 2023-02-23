export const initialStateTodoList = {
  todo: '',
};

export const actionsTypes = {
  ADD_TODO: 'ADD_TODO',
};

export const reducerTodoList = (state = initialStateTodoList, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TODO:
      console.log('reducer',{...state,todo:action.payload})
       return {...state,todo:action.payload}
      
    default:
      return  {
        todo: state.todo,
      };
  }
};

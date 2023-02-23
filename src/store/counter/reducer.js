export const actionTypes = {
  INCREASE_COUNTER: 'INCREASE_COUNTER',
  DECREASE_COUNTER: 'DECREASE_COUNTER',
};

export const initialStateCounter = {
  counter: 0,
};

const increaseCounter = (state) => {
  return {
    counter: state.counter + 1,
  };
};

const decreaseCounter = (state) => {
  return {
    counter: state.counter - 1,
  };
};

export const reducerCounter = (state = initialStateCounter, action) => {
  let newState = {};
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      newState = increaseCounter(state);
      break;
    case actionTypes.DECREASE_COUNTER:
      newState = decreaseCounter(state);
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};

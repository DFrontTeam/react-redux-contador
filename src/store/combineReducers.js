export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const rKeys = Object.keys(reducers);
    const nextReducers = {};
    for (let reducer of rKeys) {
      const invoke = reducers[reducer](state[reducer], action);
      nextReducers[reducer] = invoke;
    }
    return nextReducers;
  };
};

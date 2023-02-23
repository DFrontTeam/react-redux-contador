import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decreaseCounter, increaseCounter } from '../../store/counter/actions';

const CounterExample = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counters.counter);
  const increaseHandler = () => dispatch(increaseCounter());
  const decreaseHandler = () => dispatch(decreaseCounter());

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {' '}
      <h1 style={{ textAlign: 'center' }}>
        Counter Example to see how redux work
      </h1>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <button onClick={increaseHandler}>+</button>
        <p>{counter}</p>
        <button onClick={decreaseHandler}>-</button>
      </div>
    </div>
  );
};

export default CounterExample;

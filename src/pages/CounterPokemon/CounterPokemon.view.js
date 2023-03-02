import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CounterExample from './pages/CounterExample/CounterExample.view';

const CounterPokemon = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.countersPokemon.counter);
  const increaseHandler = () => dispatch(increaseCounter());
  const decreaseHandler = () => dispatch(decreaseCounter());

  return (
    <div>
    <CounterExample/>
    </div>
  );
};

export default CounterPokemon;

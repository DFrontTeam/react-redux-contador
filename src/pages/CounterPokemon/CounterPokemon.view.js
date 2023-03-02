import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CounterExample from '../CounterExample/CounterExample.view';
import { getIdPokemon} from '../../services/pokemon/getAll';

const CounterPokemon = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counters.counter);
  

  useEffect(()=>{
    getIdPokemon(counter,(result)=>dispatch(setPokemon(result)))
  },[counter])

  return (
    <div>
    <CounterExample title='Aumenta el contador para descubrir el pokemon'/>
    </div>
  );
};

export default CounterPokemon;

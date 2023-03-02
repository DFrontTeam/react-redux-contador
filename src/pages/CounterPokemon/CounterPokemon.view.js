import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CounterExample from '../CounterExample/CounterExample.view';
import { setPokemon} from '../../store/counter-pokemon/actions';
import { getIdPokemon} from '../../services/pokemon/getId';

const CounterPokemon = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counters.counter);
  const pokemon = useSelector((state) => state.countersPokemon.pokemonImg);
  
  useEffect(()=>{
    getIdPokemon(counter,(result)=>
    {
      console.log('view',result)
      dispatch(setPokemon(result))
    }
    )
  },[counter,pokemon])

  return (
    <div>
    <CounterExample title='Aumenta el contador para descubrir el pokemon'/>
    <p>pokomeon:{pokemon}</p>
    <img src={pokemon}/>
    </div>
  );
};

export default CounterPokemon;

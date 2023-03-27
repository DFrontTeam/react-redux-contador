import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CounterExample from '../CounterExample/CounterExample.view';
import { setPokemonImg} from '../../store/counter-pokemon/actions';
import { getIdPokemon} from '../../services/pokemon/getId';

const CounterPokemon = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counters.counter);
  const pokemon = useSelector((state) => state.countersPokemon.pokemonImg);
  
  useEffect(()=>{
    getIdPokemon(counter,(result)=> dispatch(setPokemonImg(result)))
  },[counter])

  return (
    <div>
    <CounterExample title='Aumenta el contador para descubrir el pokemon'/>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      Te ha tocado: {pokemon.name}
      {pokemon.img ? <img width="200" src={pokemon.img}/> : <p>Pokemon desconocido :( Prueba otra vez</p>}
    </div>
    </div>
  );
};

export default CounterPokemon;

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moveToPokemon, moveToCaught,setPokemon} from '../../store/todo-list-thunk/actions';
import { getAllPokemon} from '../../services/pokemon/getAll';

const TodoListThunk = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.todoListThunk.pokemon);
  const caughtPokemon = useSelector((state) => state.todoListThunk.caughtPokemon);

  useEffect(()=>{
    getAllPokemon((result)=>dispatch(setPokemon(result)))
  },[])

  const moveToPokemonHandler = (value) => {
    dispatch(moveToPokemon(value));
  };

  const moveToCaughtHandler = (value) => {
    dispatch(moveToCaught(value));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Consíguelos a todos</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <div>
          <h3>Pokemon por capturar</h3>
          <ul>
            {pokemon.map((i) => (
              <li>
                <a onClick={() => moveToCaughtHandler(i)}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Pokemon capturados</h3>
          <ul>
            {caughtPokemon.map((i) => (
              <li>
                <a onClick={() => moveToPokemonHandler(i)}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListThunk;

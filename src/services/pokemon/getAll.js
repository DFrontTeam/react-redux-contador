// export const getAllPokemon = () => {
//   return (dispatch) => { // Se retorna una función anónima
      
//     // Acción inicial enviada
//     dispatch({ type: actionsTypes.GET_POKEMON });
      
//     // Se retorna una promesa con acciones de éxito y error
//     return fetch('https://pokeapi.co/api/v2/pokemon/').then( resp => 
//       // pokemon => dispatch({ type: GET_POKEMON_SUCCESS, pokemon }),
//       // error => dispatch({ type: GET_POKEMON_ERROR, error })
//       console.log(resp.json())
//     );
      
//   };
// };


export const getAllPokemon = (callback) => {
    return fetch('https://pokeapi.co/api/v2/pokemon/').then(resp => {
      return resp.json()     
    }).then(data=> {
     const result = data.results.map((pokemon)=>{
      return pokemon.name
     })
     callback(result)
    })
      
};

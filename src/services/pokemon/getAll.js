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



export const getIdPokemon = (id,callback) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => {
    return resp.json()     
  }).then(data=> {
    console.log(data?.sprites?.front_default)
   const result = data?.sprites?.front_default  ?? data?.sprites?.back_default
   callback(result)
  }) 
};
export const getIdPokemon = (id,callback) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => {
    return resp.json()     
  }).then(data=> {
    const result = data?.sprites?.front_default  ?? data?.sprites?.back_default
    console.log(id,result)
   callback(result)
  }) 
};
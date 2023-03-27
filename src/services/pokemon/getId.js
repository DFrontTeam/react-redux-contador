export const getIdPokemon = (id,callback) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => {
    return resp.json()     
  }).then(data=> {
    console.log(data)
    const result = {
      name: data?.name,
      img: data?.sprites?.front_default  ?? data?.sprites?.back_default
    }
   callback(result)
  }).catch((error)=>{
    callback({})
  })
};
import { Pokemon, PokemonsResponse, SimplePokemon } from "@/interfaces";
import { notFound } from "next/navigation";

export const getPokemons = async ( limit=20, offset=0 ):Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}}&offset=${offset}`)
    .then(res =>  res.json());
  
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  })); 
  
  
  return pokemons;
};


export const getPokemon = async (id: string): Promise<Pokemon> => {

  try{
    const pokemon: Pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`, 
      {
        // cache: 'force-cache', 
        next:{revalidate: 60*30*6}
      }
    )
      .then(res => res.json());
    
    // console.log('Se cargó: ',pokemon.name);
    
    return pokemon;
  }
  catch{
    notFound();
  }
  
}; 
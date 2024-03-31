import { PokemonsGrid } from "@/components";
import { PokemonsResponse, SimplePokemon } from "@/interfaces";
import { getPokemons } from "@/services";
import Image from "next/image";


export const metadata = {
  title: '151 Pokemons',
  description: 'awdhawiudhw',
};

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>estático</small></span>
      <PokemonsGrid pokemons={pokemons}></PokemonsGrid>
    </div>
  );
}
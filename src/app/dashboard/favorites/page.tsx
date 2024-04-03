import { PokemonsGrid } from "@/components";
import { PokemonsResponse, SimplePokemon } from "@/interfaces";
import { getPokemons } from "@/services";
import Image from "next/image";


export const metadata = {
  title: 'Favoritos',
  description: 'Pokemones favoritos',
};

export default async function FavoritesPage() {


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemones favoritos <small>Global State</small></span>
      <PokemonsGrid pokemons={[]}></PokemonsGrid>
    </div>
  );
}
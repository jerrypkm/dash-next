import { PokemonsFavorites } from "@/components";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: 'Favoritos',
  description: 'Pokemones favoritos',
};

export default async function FavoritesPage() {


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemones favoritos <small>Global State</small></span>
      <PokemonsFavorites/>
    </div>
  );
}
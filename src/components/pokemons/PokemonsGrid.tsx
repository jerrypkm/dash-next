import { SimplePokemon } from '@/interfaces';
import Image from 'next/image';
import { PokemonCard } from './PokemonCard';

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonsGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(pokemon=> 
        <PokemonCard 
          pokemon={pokemon} key={pokemon.id}
        />)} 
    </div>
  );
};

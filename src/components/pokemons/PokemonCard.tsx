'use client';
import { SimplePokemon } from '@/interfaces';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';


interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}:Props) => {

  const {id, name} = pokemon;
  //Verifica desde Redux si el pokemon existe y es favorito
  const isFavorie = useAppSelector(state=> !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();
  
  const onToggle = () => {
    dispatch( toggleFavorite( pokemon ) );
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white flex flex-col rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image 
            width={100}
            height={100}
            key={pokemon.id}
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <p className="text-sm text-gray-100">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Saber más
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className='text-red-600'>
              {
                isFavorie 
                  ? (<IoHeart></IoHeart>) 
                  : (<IoHeartOutline/>)
              }
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {
                  isFavorie 
                    ? 'Es favorito' 
                    : 'No es favorito'
                }
              </p>
              <p className="text-xs text-gray-500">Clic para agregar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

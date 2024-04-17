'use client';
import React, { useEffect, useRef, useState } from 'react';
import { PokemonsGrid } from '../';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonsFavorites = () => {
  
  const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites));  
  const [pokemons, setPokemons] = useState(favoritePokemons);
  const isLoad = useRef<boolean>(false);

  useEffect(() => {
    if(isLoad.current===false && Object.values(favoritePokemons).length!==0) {
      setPokemons(Object.values(favoritePokemons));
      isLoad.current = true;
    }
  }, [favoritePokemons]);
  
  
  return (
    <>
      {pokemons.length
        ?   <PokemonsGrid pokemons={pokemons}></PokemonsGrid>
        :   <NoFavorites/>
      }

    </>
  );
};

export const NoFavorites = () => {
  return(
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"></IoHeartOutline>
      <span className="text-4xl">No hay favoritos</span>
    </div>
  );
};
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/interfaces';

interface PokemonsFavoritesState{
  favorites:{
    [key: string]: SimplePokemon
  }
}

// const getInitialState = (): PokemonsFavoritesState => {
//   // if(typeof localStorage === 'undefined') return {};
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites;
// };

const initialState: PokemonsFavoritesState = {
  favorites:{}
  // ...getInitialState(),
  // '1': {id: '1', name: 'bulbasaur'},
  // '3': {id: '3', name: 'venusaur'},
  // '5': {id: '5', name: 'charmeleon'},
};

const pokemonsSlice = createSlice({
  name: 'favoriePokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{ [key: string] : SimplePokemon }>){
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload; 
      const {id} = pokemon;

      if( !!state.favorites[id] ){
        delete state.favorites[id];
        // return;
      }
      else{
        state.favorites[id] = pokemon;
      }

      localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
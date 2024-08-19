import axios from 'axios';
import { Pokemons } from '../types/types';

export const searchPokemonByName = async (name: string) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const result = response.data;
    const pokemon: Pokemons[] = [
      result.id,
      result.name,
      result.sprites['front_default'],
      result.base_experience,
    ];
    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

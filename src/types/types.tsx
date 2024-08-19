export type Pokemon = {
  name: string;
  url: string;
};

interface sprites {
  front_default: string;
}

export type Pokemons = {
  id: number;
  name: string;
  sprites: sprites;
};

export type PokemonsUrl = {
  url: string;
};

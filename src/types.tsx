type IPokemon = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
};

export type PropsPokemon = {
  pokemon: Pokemon;
};

export default IPokemon;

import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import IPokemon from "@/types";
import { useRouter } from "next/router";

import styles from "../../styles/Pokemon.module.css";

type PokemonTypes = {
  type: { name: string };
};

type PokemonDetails = {
  height: number;
  id: number;
  name: string;
  types: PokemonTypes[];
  weight: number;
};

type PokemonProps = {
  pokemon: PokemonDetails;
};

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data: IPokemon = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context?.params?.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }: PokemonProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_title}>{pokemon?.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}

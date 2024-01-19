import Image from "next/image";
import Card from "@/components/Card";

import IPokemon, { Pokemon } from "../types";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data: IPokemon = await res.json();

  // add Pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

type PropsHome = {
  pokemons: Pokemon[];
};

export default function Home({ pokemons: pokemons }: PropsHome) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemons_container}>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

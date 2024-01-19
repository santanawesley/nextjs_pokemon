import Link from "next/link";
import Image from "next/image";

import { PropsPokemon } from "../types";
import styles from "../styles/Card.module.css";

export default function Card({ pokemon }: PropsPokemon) {
  return (
    <div className={styles.card_pokemon}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width="121"
        height="121"
        alt={pokemon.name}
      />
      <p className={styles.card_id}>#{pokemon.id}</p>
      <h3 className={styles.card_title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.card_btn}>
        Detalhes
      </Link>
    </div>
  );
}

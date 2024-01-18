import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum,
        dolorum fugiat iure fuga accusantium beatae natus officia eveniet nam,
        deserunt esse modi temporibus nulla veniam nemo officiis voluptas
        praesentium?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Pokemon Charizard"
      />
    </div>
  );
}

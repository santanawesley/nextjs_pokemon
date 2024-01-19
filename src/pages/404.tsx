import Link from "next/link";
import style from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={style.not_found}>
      <h1>404</h1>
      <p>Esta página não existe!</p>
      <Link href="/" className={style.btn}>
        Ir para Home
      </Link>
    </div>
  );
}

import { Inner } from "./inner";
import * as styles from "./page.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>hoge</h1>
      <Inner />
    </main>
  );
}

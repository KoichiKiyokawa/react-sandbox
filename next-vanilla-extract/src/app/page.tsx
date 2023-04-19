import { Inter } from "next/font/google"
import * as styles from "./style.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={styles.main}>
      <button className={styles.button}>hoge</button>
    </main>
  )
}

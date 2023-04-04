import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className="text-red-400 sm:text-blue-400 sm:font-bold">top page</h1>
    </div>
  )
}

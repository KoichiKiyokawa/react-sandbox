import { useRouter } from "next/router"

export const BackButton = () => {
  const router = useRouter()
  const back = () => router.back()
  return <button onClick={back}>back</button>
}

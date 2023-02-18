import { useFetcher } from "../utils/fetcher"

export default function Home() {
  const { data } = useFetcher("/users/{id}", { params: { id: 1 } })
  return <div />
}

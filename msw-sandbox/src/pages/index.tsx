import { useQuery } from "../hooks/query"

type Todo = {
  id: string
  text: string
  done: boolean
}

const IndexPage = () => {
  const { data } = useQuery<Todo[]>(["todos"])

  if (data === undefined) return <span>Loading...</span>
  return <div>{JSON.stringify(data)}</div>
}

export default IndexPage

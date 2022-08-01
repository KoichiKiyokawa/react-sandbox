import { useQuery } from "urql"
import { GetTodosDocument } from "../gql/__generated"

export default function GqlPage() {
  const [{ data }] = useQuery({ query: GetTodosDocument })

  if (data === undefined) return <span>Loading...</span>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

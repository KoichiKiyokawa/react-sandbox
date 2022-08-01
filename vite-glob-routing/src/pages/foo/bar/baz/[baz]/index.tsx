import { useParams } from "react-router-dom"

export default function Baz() {
  const { baz } = useParams()

  return <div>Baz: {baz}</div>
}

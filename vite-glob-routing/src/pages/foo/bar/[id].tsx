import { useParams } from "react-router-dom"

export default function FooBarShow() {
  const { id } = useParams()
  return <div>FooBarShow: {id}</div>
}

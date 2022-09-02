import { Suspense, useEffect } from "react"
import useSWR from "swr"
import { fetcher } from "../../lib/fetcher"
import { User } from "../../types/user"

type Props = {
  userId: number
}

const Inner = ({ userId }: Props) => {
  const { data, error } = useSWR(
    ["users", 1],
    (...keys) => fetcher(keys.join("/")).json<User>(),
    { suspense: true }
  )

  useEffect(() => {
    if (error) alert(error.message)
  }, [error])

  if (data === undefined) {
    console.log("undefined")
    return null
  }

  return (
    <div>
      <h4>{data.name}</h4>
      <p>{data.username}</p>
      <p>{data.email}</p>
      <p>{data.email}</p>
    </div>
  )
}

export const UserCard = (props: Props) => (
  <Suspense>
    <Inner {...props} />
  </Suspense>
)

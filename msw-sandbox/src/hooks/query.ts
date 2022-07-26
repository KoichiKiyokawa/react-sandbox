import { useQuery as useQueryBase } from "@tanstack/react-query"

const BASE_URL = "http://localhost:3000/api/"

export const useQuery = <Data = unknown, Error = unknown>(
  keys: Array<string | number>
) =>
  useQueryBase<Data, Error>(keys, () =>
    fetch(BASE_URL + keys.join("/")).then((res) => res.json())
  )

import { useQuery as useQueryBase } from "@tanstack/react-query"
import { BASE_URL } from "../const"

export const useQuery = <Data = unknown, Error = unknown>(
  keys: Array<string | number>
) =>
  useQueryBase<Data, Error>(keys, () =>
    fetch(BASE_URL + keys.join("/")).then((res) => res.json())
  )

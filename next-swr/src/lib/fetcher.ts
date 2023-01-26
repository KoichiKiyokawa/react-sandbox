import useSWR from "swr"
import { PathToParams } from "@/type"
import { ofetch } from "ofetch"

type Options = {
  method: "get" | "post" | "put" | "delete"
}

export const fetcher = async <Path extends keyof PathToParams>(
  path: Path,
  options?: Options
) => {
  return ofetch<PathToParams[Path]["res"]>(path, {
    baseURL: "https://jsonplaceholder.typicode.com",
    ...options,
  })
}

export const useFetcher = <Key extends keyof PathToParams>(key: Key) => {
  return useSWR(key, async (path: Key) => {
    const data = await fetcher(path)
    console.log({ data })
    return data
  })
}

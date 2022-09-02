import ky from "ky"

export const fetcher = ky.create({
  prefixUrl: "https://jsonplaceholder.typicode.com/",
})

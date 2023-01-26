import useSWR from "swr"
import { fetcher, useFetcher } from "@/lib/fetcher"
import { Inter } from "@next/font/google"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"

const inter = Inter({ subsets: ["latin"] })

export const getServerSideProps = (async () => {
  const data = await fetcher("posts")
  return {
    props: {
      fallback: {
        posts: data,
      },
    },
  }
}) satisfies GetServerSideProps

const Hoge: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fallback }) => {
  const { data } = useSWR("posts", fetcher, { fallback, fall })
  console.log(data)

  return (
    <>
      <h1>hoge</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
export default Hoge

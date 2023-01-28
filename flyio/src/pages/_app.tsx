import type { AppType } from "next/app"
import { trpc } from "@/lib/trpc/client"

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(MyApp)

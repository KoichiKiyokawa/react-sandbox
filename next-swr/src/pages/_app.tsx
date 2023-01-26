import "@/styles/globals.css"
import { AppProps } from "next/app"
import { SWRConfig } from "swr"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import {
  QueryClientProvider,
  Hydrate,
  QueryClient,
} from "@tanstack/react-query"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

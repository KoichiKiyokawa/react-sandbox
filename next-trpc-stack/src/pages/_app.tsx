import { trpc } from "@/lib/trpc/client";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);

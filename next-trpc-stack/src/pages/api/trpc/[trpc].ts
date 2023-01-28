import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/features/core/core.router";
import { createContext } from "@/lib/trpc/server";

// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext,
});

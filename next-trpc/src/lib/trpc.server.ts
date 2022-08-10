import trpc from "@trpc/server";
import trpcNext from "@trpc/server/adapters/next";
import { db } from "./db";

// The app's context - is generated for each incoming request
export async function createContext(_opts?: trpcNext.CreateNextContextOptions) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  return {
    db,
  };
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();

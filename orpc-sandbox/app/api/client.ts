import { RPCLink } from "@orpc/client/fetch";
import { type RouterClient } from "@orpc/server";

import { createORPCClient } from "@orpc/client";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import type { router } from "./router";

const link = new RPCLink({
  url: "/api",
  headers: () => ({
    authorization: "Bearer token",
  }),
  // fetch: <-- provide fetch polyfill fetch if needed
});

// Create a client for your router
const client: RouterClient<typeof router> = createORPCClient(link);

export const orpc = createORPCReactQueryUtils(client);

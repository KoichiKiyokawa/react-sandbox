import createClient, { ClientMethod, FetchResponse } from "openapi-fetch";
import { paths } from "../types/__generated";
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers";
import useSWR, { SWRConfiguration } from "swr";

const client = createClient<paths>();
type Client = typeof client;

function useFetchV2<
  Method extends Uppercase<HttpMethod>,
  Path extends PathsWithMethod<paths, Lowercase<Method>>
>(
  method: Method,
  path: Path,
  {
    params,
    body,
    swrConfig,
  }: Parameters<Client[Method]>[1] & { swrConfig?: SWRConfiguration }
) {
  return useSWR<
    // Awaited<
    //   ReturnType<ClientMethod<paths, Lowercase<Method>, "application/json">>
    // >,
    FetchResponse<
      paths[Path][Lowercase<Method>],
      {},
      "application/json"
    >["data"],
    FetchResponse<
      paths[Path][Lowercase<Method>],
      {},
      "application/json"
    >["error"],
    any
  >(
    [path],
    async () => {
      // @ts-ignore
      return await client[method](path, { params, body });
    },
    swrConfig
  );
}

const { data, error } = useFetchV2("GET", "/users", {
  params: { path: { id: 1 } },
});

useFetchV2("POST", "/users", { body: {} });

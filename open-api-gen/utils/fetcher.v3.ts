import createClient, { FetchResponse, MaybeOptionalInit } from "openapi-fetch";
import {
  HasRequiredKeys,
  HttpMethod,
  PathsWithMethod,
} from "openapi-typescript-helpers";
import useSWR, { SWRConfiguration } from "swr";
import { paths } from "../types/__generated";

const client = createClient<paths>();

export function useSWRWrapper<
  Data,
  Error,
  Key extends [keyof paths, ...unknown[]]
>(
  key: Key | null,
  fetcher: (key: Key) => Promise<{ data?: Data; error?: Error }>,
  config?: SWRConfiguration<Data, Error>
) {
  return useSWR<Data, Error>(
    key,
    async (key: Key) => {
      const { data, error } = await fetcher(key);
      if (data === undefined) throw error;

      return data;
    },
    config
  );
}

type AdditionalInit = { swrConfig?: SWRConfiguration; shouldFetch?: boolean };

export function useFetcher<
  Method extends Uppercase<HttpMethod>,
  Path extends PathsWithMethod<paths, Lowercase<Method>>,
  Init extends MaybeOptionalInit<paths[Path], Lowercase<Method>>
>(
  method: Method,
  path: Path,
  ...init: HasRequiredKeys<Init> extends never
    ? [(Init & AdditionalInit & { [key: string]: unknown })?] // note: the arbitrary [key: string]: addition MUST happen here after all the inference happens (otherwise TS can’t infer if it’s required or not)
    : [Init & AdditionalInit & { [key: string]: unknown }]
) {
  return useSWRWrapper(
    init?.[0]?.shouldFetch === false ? null : [path, ...init],
    ([path, ...args]) =>
      (client[method] as any)(path, ...args) as Promise<
        FetchResponse<paths[Path][Lowercase<Method>], Init, "application/json">
      >
  );
}

const useMain = () => {
  const per = 1;
  const page = 1;
  const res = useSWRWrapper(
    ["/users", per, page],
    async ([path, per_, page_]) =>
      client.GET(path, {
        params: { query: { per: per_, page: page_ } },
      }),
    {}
  );

  const { data, error } = useFetcher("GET", "/users", {
    params: { query: { per: 10, page: 0 } },
  });
};

import createClient, { FetchResponse, MaybeOptionalInit } from "openapi-fetch";
import {
  HasRequiredKeys,
  HttpMethod,
  PathsWithMethod,
} from "openapi-typescript-helpers";
import useSWR, { SWRConfiguration } from "swr";
import { paths } from "../types/__generated";

const client = createClient<paths>();

type ArgumentsTuple = readonly [any, ...unknown[]];
type StrictTupleKey = ArgumentsTuple | null | undefined | false;
type StrictKey = StrictTupleKey | (() => StrictTupleKey);

export function useSWRWrapper<Data, Error, SWRKey extends StrictKey>(
  key: SWRKey,
  fetcher: (key: SWRKey) => Promise<{ data?: Data; error?: Error }>,
  config?: SWRConfiguration
) {
  return useSWR<Data | undefined, Error>(
    key,
    async (key: SWRKey) => {
      const { data, error } = await fetcher(key);
      if (error) throw error;

      return data;
    },
    config
  );
}

export function useFetcher<
  Method extends Uppercase<HttpMethod>,
  Path extends PathsWithMethod<paths, Lowercase<Method>>,
  Init extends MaybeOptionalInit<paths[Path], Lowercase<Method>>
>(
  method: Method,
  path: Path,
  ...init: HasRequiredKeys<Init> extends never
    ? [(Init & { swrConfig?: SWRConfiguration } & { [key: string]: unknown })?] // note: the arbitrary [key: string]: addition MUST happen here after all the inference happens (otherwise TS can’t infer if it’s required or not)
    : [Init & { swrConfig?: SWRConfiguration } & { [key: string]: unknown }]
) {
  return useSWRWrapper(
    [path, ...init],
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
    ["/users", per, page] as const,
    async ([path, per_, page_]) =>
      client.GET(path, { params: { query: { per: per_, page: page_ } } })
  );

  const { data, error } = useFetcher("GET", "/users", {
    params: { query: { per: 10, page: 0 } },
  });
  const res = useFetcher("GET", "/users/{id}", { params: { path: { id: 1 } } });
};

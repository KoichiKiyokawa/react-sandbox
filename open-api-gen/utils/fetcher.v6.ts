import createClient, { FetchOptions } from "openapi-fetch";
import useSWR, { SWRConfiguration, Key as SWRKey } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import useSWRInfinite, {
  SWRInfiniteConfiguration,
  SWRInfiniteKeyLoader,
  SWRInfiniteResponse,
} from "swr/infinite";
import { paths } from "../types/__generated";

const client = createClient<paths>();

function $queryKey<Method extends keyof paths[Path], Path extends keyof paths>(
  _method: Method,
  path: Path,
  options: FetchOptions<paths[Path][Method]>
) {
  return [path, options] as const;
}

type ResultPromise<Data, Error> = Promise<
  { data: Data; error?: never } | { data?: never; error: Error }
>;

export function useSWRWithResultPromise<Data, Error, Key extends SWRKey>(
  key: Key | null,
  fetcher: (key: Key) => ResultPromise<Data, Error>,
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

export function useSWRInfiniteWithResultPromise<
  Data,
  Error,
  Key extends SWRKey
>(
  getKey: SWRInfiniteKeyLoader<Data, Key | null>,
  fetcher: (key: Key) => ResultPromise<Data, Error>,
  config?: SWRInfiniteConfiguration<Data, Error>
) {
  return useSWRInfinite<Data, Error>(
    getKey,
    async (key) => {
      const { data, error } = await fetcher(key);
      if (data === undefined) throw error;

      return data;
    },
    config
  );
}

export function useSWRMutationWithResultPromise<
  Data,
  Error,
  Key extends SWRKey
>(
  key: Key,
  fetcher: (key: Key) => ResultPromise<Data, Error>,
  config?: SWRMutationConfiguration<Data, Error>
) {
  return useSWRMutation<Data, Error, Key>(
    key,
    async (path, data) => {
      const { data, error } = await fetcher(key);
      if (data === undefined) throw error;

      return data;
    },
    config
  );
}

function Component() {
  const per = 1;
  const page = 1;
  const isPending = false;
  const { data } = useSWRWithResultPromise(
    isPending
      ? null
      : $queryKey("get", "/users", { params: { query: { per, page } } }),
    (args) => client.GET(...args)
  );

  const { data: data2 } = useSWRInfiniteWithResultPromise(
    (index, previousPageData) => {
      if (previousPageData === null) return null;

      return $queryKey("get", "/users", {
        params: { query: { per, page: index } },
      });
    },
    (args) => client.GET(...args)
  );
}

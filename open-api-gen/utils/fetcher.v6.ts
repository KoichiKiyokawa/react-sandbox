import createClient, { FetchOptions } from "openapi-fetch";
import useSWR, { SWRConfiguration, Key as SWRKey } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import useSWRInfinite, {
  SWRInfiniteConfiguration,
  SWRInfiniteKeyLoader,
} from "swr/infinite";
import { paths } from "../types/__generated";
import camelcaseKeys from "camelcase-keys";

const client = createClient<paths>();

function $queryKey<Method extends keyof paths[Path], Path extends keyof paths>(
  method: Method,
  path: Path,
  { tags, ...options }: FetchOptions<paths[Path][Method]> & { tags?: string[] }
) {
  return { method, path, options, tags } as const;
}

type Result<Data, Error> =
  | { data: Data; error?: never }
  | { data?: never; error: Error };

type ResultPromise<Data, Error> = Promise<Result<Data, Error>>;

function toThrowable<Data, Error>(res: Result<Data, Error>) {
  if (res.data !== undefined) return res.data as Data;
  throw res.error;
}

export function useSWRWithResultPromise<Data, Error, Key extends SWRKey>(
  key: Key | null,
  fetcher: (key: Key) => ResultPromise<Data, Error>,
  config?: SWRConfiguration<Data, Error>
) {
  return useSWR<Data, Error>(
    key,
    (key: Key) => fetcher(key).then(toThrowable),
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
    (key) => fetcher(key).then(toThrowable),
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
    async (key) => {
      const { data, error } = await fetcher(key);
      if (data === undefined) throw error;

      return data;
    },
    config
  );
}

async function action() {
  const res = await client.request("get", "/users", {
    params: { query: { per: 1, page: 1 } },
  });
}

function Component() {
  const per = 1;
  const page = 1;
  const isPending = false;
  const { data, error } = useSWRWithResultPromise(
    isPending
      ? null
      : $queryKey("get", "/users", { params: { query: { per, page } } }),
    ({ method, path, options }) =>
      client
        .request(method, path, options)
        .then((res) =>
          res.data !== undefined
            ? { data: camelcaseKeys(res.data), error: undefined }
            : { data: undefined, error: res.error }
        )
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

import createClient from "openapi-fetch";
import useSWR, { SWRConfiguration } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import { paths } from "../types/__generated";

const client = createClient<paths>();

export function useSWRWrapper<
  Data,
  Error,
  Key extends [keyof paths, ...unknown[]]
>(
  key: Key | null,
  fetcher: (
    key: Key
  ) => Promise<{ data: Data; error?: never } | { data?: never; error: Error }>,
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

export function useSWRMutationWrapper<
  Data,
  Error,
  Key extends [keyof paths, ...unknown[]]
>(
  key: Key,
  fetcher: (
    key: Key
  ) => Promise<{ data: Data; error?: never } | { data?: never; error: Error }>,
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
  const {} = useSWRWrapper(["/users", per, page], ([path]) =>
    client.GET(path, { params: { query: { per, page } } })
  );

  const {} = useSWR(["/users" as const, per, page], ([path]) =>
    client.GET(path, { params: { query: { per, page } } })
  );
}

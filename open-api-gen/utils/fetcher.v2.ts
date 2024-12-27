import createClient, { FetchOptions } from "openapi-fetch";
import { paths } from "../types/__generated";
import useSWR, { Key, SWRConfiguration } from "swr";
import { Get } from "type-fest";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";

const client = createClient<paths>();

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type SuccessResponse<
  Method extends HttpMethod,
  Path extends keyof paths
> = Get<
  paths[Path][Lowercase<Method>],
  "responses.200.content.application/json"
>;

export type FailedResponse<
  Method extends HttpMethod,
  Path extends keyof paths
> = Get<
  paths[Path][Lowercase<Method>],
  "responses.500.content.application/json"
>;

function useQuery<Method extends HttpMethod, Path extends keyof paths>(
  method: Method,
  path: Path,
  {
    swrConfig,
    pause = false,
    ...rest
  }: FetchOptions<paths[Path][Lowercase<Method>]> & {
    swrConfig?: SWRConfiguration;
    pause?: boolean;
  }
) {
  const fetcher = async () =>
    // @ts-expect-error
    client[method](path, rest).then((res) => {
      if (res.data === undefined) throw res.error;
      return res.data;
    });

  return useSWR<SuccessResponse<Method, Path>, FailedResponse<Method, Path>>(
    pause ? null : [path, rest],
    fetcher,
    swrConfig
  );
}

function useQueryInfinite<
  Method extends HttpMethod,
  Path extends keyof paths,
  Data extends SuccessResponse<Method, Path>,
  Error extends FailedResponse<Method, Path>
>(
  method: Method,
  path: Path,
  {
    swrConfig,
    pause = false,
    ...rest
  }: FetchOptions<paths[Path][Lowercase<Method>]> & {
    swrConfig?: SWRInfiniteConfiguration<Data, Error>;
    pause?: boolean;
  }
) {
  const getKey = (pageIndex: number, previousPageData: unknown[]) => {
    if (previousPageData && !previousPageData?.length) return null; // 最後に到達した
    return [
      path,
      {
        ...rest,
        params: {
          ...rest.params,
          query: { ...rest.params?.query, page: pageIndex },
        },
      },
    ];
  };
  const fetcher = async ([path, payload]: [
    string,
    Record<string, unknown>
  ]) => {
    // @ts-expect-error
    const res = await client[method](path, payload);
    if (res.data === undefined) throw res.error;
    return res.data;
  };
  return useSWRInfinite<Data, Error>(getKey, fetcher, swrConfig);
}

function useMutation<
  Method extends HttpMethod,
  Path extends keyof paths,
  Data extends SuccessResponse<Method, Path>,
  Error extends FailedResponse<Method, Path>,
  RequestPayload extends Pick<
    FetchOptions<paths[Path][Lowercase<Method>]>,
    "body" | "params" | "headers"
  >
>(
  method: Method,
  path: Path,
  swrConfig?: SWRMutationConfiguration<Data, Error>
) {
  return useSWRMutation<Data, Error, Key, RequestPayload>(
    [],
    // @ts-expect-error
    async (_key, { arg }) => {
      // @ts-expect-error
      return await client[method](path, arg).then((res) => {
        if (res.data === undefined) throw res.error;
        return res.data;
      }, swrConfig);
    }
  );
}

function Test() {
  const userListResult = useQuery("GET", "/users", {
    params: { query: { per: 1, page: 1 } },
  });
  console.log(userListResult.data, userListResult.error);
  const userDetailResult = useQuery("GET", "/users/{id}", {
    params: { path: { id: 1 } },
  });
  console.log(userDetailResult.data, userDetailResult.error);

  const userListInitial = useQueryInfinite("GET", "/users", {
    params: { query: { per: 10, page: 0 } },
  });
  console.log(userListInitial.data, userListInitial.error);

  const userListDelay = useMutation("POST", "/users");
  userListDelay.trigger({ body: { id: 1 } });
}

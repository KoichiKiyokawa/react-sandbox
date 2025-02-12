import camelcaseKeys, { CamelCaseKeys } from "camelcase-keys";
import createClient, {
  ClientPathsWithMethod,
  FetchOptions,
  FetchResponse,
} from "openapi-fetch";
import useSWR from "swr";
import { paths } from "../types/__generated";
import { CamelCasedPropertiesDeep, Get } from "type-fest";

const baseClient = createClient<paths>();

export type HttpMethod = "get" | "post";

type SuccessResponse<
  Method extends HttpMethod,
  Path extends ClientPathsWithMethod<typeof baseClient, Method>
> = Extract<
  FetchResponse<paths[Path][Method], {}, "application/json">,
  { data: unknown }
>["data"];

let a: SuccessResponse<"get", "/users">;

type FailResponse<
  Method extends HttpMethod,
  Path extends ClientPathsWithMethod<typeof baseClient, Method>
> = Get<paths[Path][Method], "responses.500.content.application/json">;

const request = <
  Method extends HttpMethod,
  Path extends PathsWithMethod<paths, Method>,
  Data extends SuccessResponse<Method, Path>,
  Error extends FailResponse<Method, Path>
>(
  method: Method,
  url: Path,
  init: FetchOptions<paths[Path][Method]>
) =>
  baseClient
    .request(method, url, init)
    .then(
      (res) =>
        camelcaseKeys(res, { deep: true }) as
          | { data: CamelCasedPropertiesDeep<Data>; error?: never }
          | { data?: never; error: CamelCasedPropertiesDeep<Error> }
    );

function useFetcher<
  Method extends HttpMethod,
  Path extends PathsWithMethod<paths, Method>
>(
  method: Method,
  url: Path,
  { tags, ...options }: FetchOptions<paths[Path][Method]> & { tags?: string[] }
) {
  return useSWR<
    CamelCasedPropertiesDeep<SuccessResponse<Method, Path>>,
    CamelCasedPropertiesDeep<FailResponse<Method, Path>>
  >({ method, url, params: options.params, tags }, () =>
    request(method, url, options).then((res) => {
      if (res.error) throw res.error;
      return res.data;
    })
  );
}

async function action() {
  const { data, error } = await request("get", "/users", {
    params: { query: { per: 10, page: 0 } },
  });
}

function Component() {
  const { data, error } = useFetcher("get", "/users", { params: {} });
}

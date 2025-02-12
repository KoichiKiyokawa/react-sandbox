import { Client, FetchOptions, FetchResponse } from "openapi-fetch";
import { PathsWithMethod } from "openapi-typescript-helpers";
import { HttpMethod, MediaType } from "openapi-typescript-helpers/index.cjs";
import useSWR, { SWRConfiguration } from "swr";

export type SuccessResponseByMethodAndPath<
  Paths extends Record<string, any>,
  Method extends HttpMethod,
  Path extends PathsWithMethod<Paths, Method>
> = Extract<
  FetchResponse<Paths[Path][Method], {}, MediaType>,
  { data: unknown }
>["data"];

export type ErrorResponseByMethodAndPath<
  Paths extends Record<string, any>,
  Method extends HttpMethod,
  Path extends PathsWithMethod<Paths, Method>
> = Extract<
  FetchResponse<Paths[Path][Method], {}, MediaType>,
  { error: unknown }
>["error"];

export default function createHooks<
  Paths extends Record<string, any>,
  Media extends MediaType
>(client: Client<Paths, Media>) {
  function useQuery<
    Method extends HttpMethod,
    Path extends PathsWithMethod<Paths, Method>,
    Data extends SuccessResponseByMethodAndPath<Paths, Method, Path>,
    Error extends ErrorResponseByMethodAndPath<Paths, Method, Path>,
    ConvertedData extends Data
  >(
    method: Method,
    url: Path,
    {
      tags,
      converter = (d) => d,
      ...options
    }: FetchOptions<Paths[Path][Method]> & {
      tags?: string[];
      converter?: (data: Data) => ConvertedData;
    },
    config?: SWRConfiguration<Data, Error>
  ) {
    return useSWR<ConvertedData, Error>(
      { method, url, params: options.params, tags },
      () =>
        client.request(method, url, options as any).then((res) => {
          if (res.error) throw res.error;
          return converter(res.data);
        }),
      config
    );
  }

  function useMutation() {}

  return { useQuery, useMutation };
}

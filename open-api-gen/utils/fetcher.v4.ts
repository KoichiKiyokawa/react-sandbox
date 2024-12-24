import createClient, { FetchOptions, FetchResponse } from "openapi-fetch";
import { HttpMethod, MediaType } from "openapi-typescript-helpers";
import useSWR, { SWRConfiguration } from "swr";
import { paths } from "../types/__generated";

const client = createClient<paths>();

type MethodWithPaths = {
  [P in keyof paths]: {
    [M in keyof paths[P] & HttpMethod]: paths[P][M] extends never | undefined
      ? never
      : `${Uppercase<M>} ${P}`;
  }[keyof paths[P] & HttpMethod];
}[keyof paths];

/**
 * @example
 * ```ts
 * ExtractPath<'GET /users'> // -> '/users'
 * ```
 */
type ExtractPath<MethodWithPath extends MethodWithPaths> =
  MethodWithPath extends `${string} ${infer P}` ? P : never;

/**
 * @example
 * ```ts
 * ExtractPath<'GET /users'> // -> 'get'
 * ```
 */
type ExtractMethod<MethodWithPath extends MethodWithPaths> =
  MethodWithPath extends `${infer M} ${string}` ? Lowercase<M> : never;

type FetchResponseByMethodWithPath<MethodWithPath extends MethodWithPaths> =
  FetchResponse<
    paths[ExtractPath<MethodWithPath>][ExtractMethod<MethodWithPath>],
    FetchOptions<
      paths[ExtractPath<MethodWithPath>][ExtractMethod<MethodWithPath>]
    >,
    MediaType
  >;

/**
 * @example
 * ```ts
 * ResponseBodyByMethodWithPath<'GET /users'> // 'GET /users'の返り値の型
 * ```
 */
type ResponseBodyByMethodWithPath<MethodWithPath extends MethodWithPaths> =
  NonNullable<FetchResponseByMethodWithPath<MethodWithPath>["data"]>;

/**
 * @example
 * ```ts
 * ResponseErrorByMethodWithPath<'GET /users'> // 'GET /users'のエラーの型
 * ```
 */
type ResponseErrorByMethodWithPath<MethodWithPath extends MethodWithPaths> =
  NonNullable<FetchResponseByMethodWithPath<MethodWithPath>["error"]>;

// cf) https://github.com/htunnicliff/swr-openapi/blob/main/src/index.ts
export function useFetcher<
  MethodWithPath extends MethodWithPaths,
  Method extends ExtractMethod<MethodWithPath>,
  Path extends ExtractPath<MethodWithPath>,
  Data extends ResponseBodyByMethodWithPath<MethodWithPath>,
  Error extends ResponseErrorByMethodWithPath<MethodWithPath>,
  Config extends SWRConfiguration<Data, Error>
>(
  methodWithPath: MethodWithPath,
  options: FetchOptions<paths[Path][Method]> & {
    pause?: boolean;
    swrConfig?: Config;
  }
) {
  const { pause = false, swrConfig, ...requestOptions } = options;
  const [method, path] = methodWithPath.split(" ", 1);
  return useSWR<Data, Error>(
    pause
      ? null
      : [
          path,
          // @ts-expect-error `path` field conditionally exists
          requestOptions.params?.path,
          requestOptions.params?.query,
          requestOptions.headers,
        ].filter(Boolean),
    () => {
      // @ts-expect-error
      const func = client[method];
      if (func === undefined)
        throw Error(`invalid method was specified: ${method}`);
      return func(path, requestOptions);
    },
    swrConfig
  );
}

const { data, error } = useFetcher("GET /users", {
  params: { query: { per: 10, page: 0 } },
  headers: { foo: 1 },
  pause: true,
});

const { data: data2 } = useFetcher("GET /users/{id}", {
  params: { path: { id: 1 } },
});

const { data: data3 } = useFetcher("POST /users", {});

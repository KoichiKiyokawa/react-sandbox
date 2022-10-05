import Ky from "ky"
import useSWR from "swr"
import { Get } from "type-fest"
import { paths } from "../types/__generated"

const base = Ky.extend({
  prefixUrl: "https://api.example.com",
})

export function replacePathParams(
  path: string,
  params?: Record<string, unknown>
) {
  if (params === undefined) return path
  return path.replace(/\{(\w+)\}/g, (_, key) => `${params[key]}`)
}

interface GeneratedPaths extends paths {}

type HttpMethods = "get" | "post" | "put" | "patch" | "delete"

export type GetPathsFilteredByHttpMethod<Method extends HttpMethods> = {
  [K in keyof GeneratedPaths]: GeneratedPaths[K] extends Record<Method, unknown>
    ? K
    : never
}[keyof GeneratedPaths]

export type GetPathParamsByPathAndHttpMethod<
  Path extends keyof GeneratedPaths,
  Method extends HttpMethods
> = Get<GeneratedPaths[Path], `${Method}.parameters.path`>

export type GetRequestBodyByPathAndHttpMethod<
  Path extends keyof GeneratedPaths,
  Method extends HttpMethods
> = Get<GeneratedPaths[Path], `${Method}.requestBody.content.application/json`>

export type GetRequestQueryByPathAndHttpMethod<
  Path extends keyof GeneratedPaths,
  Method extends HttpMethods
> = Get<GeneratedPaths[Path], `${Method}.parameters.query`>

export type GetResponseByPathAndHttpMethod<
  Path extends keyof GeneratedPaths,
  Method extends HttpMethods
> = Get<
  GeneratedPaths[Path],
  `${Method}.responses.200.content.application/json`
>

type Options<Path extends keyof GeneratedPaths, Method extends HttpMethods> = {
  params: GetPathParamsByPathAndHttpMethod<Path, Method>
  body: GetRequestBodyByPathAndHttpMethod<Path, Method>
  query: GetRequestQueryByPathAndHttpMethod<Path, Method>
}

export type FetcherFunc<Method extends HttpMethods> = <
  Path extends GetPathsFilteredByHttpMethod<Method>
>(
  path: Path,
  options?: Options<Path, Method>
) => Promise<GetResponseByPathAndHttpMethod<Path, Method>>

const get: FetcherFunc<"get"> = (path, options) =>
  base.get(replacePathParams(path, options?.params as any)).json()

const post: FetcherFunc<"post"> = (path, options) =>
  base.post(replacePathParams(path, options?.params as any)).json()

const put: FetcherFunc<"put"> = (path, options) =>
  base.put(replacePathParams(path, options?.params as any)).json()

const patch: FetcherFunc<"patch"> = (path, options) =>
  base.patch(replacePathParams(path, options?.params as any)).json()

const del: FetcherFunc<"delete"> = (path, options) =>
  base.delete(replacePathParams(path, options?.params as any)).json()

export const fetcher = {
  get,
  post,
  put,
  patch,
  delete: del,
}

export const useFetcher = <Path extends keyof paths>(
  path: Path,
  options: Options<Path, "get">
) => useSWR([path, options], fetcher.get)

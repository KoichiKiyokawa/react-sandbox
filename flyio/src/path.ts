// prettier-ignore
// This file is auto generated. DO NOT EDIT

type PathToParams = {
  '/[id]/edit': {id: string | number},
  '/[id]': {id: string | number},
  '/api/trpc/[trpc]': {trpc: string | number},
  '/': never
}

/**
 * @example
 * buildPath('/posts/[id]', { id: 1 }) // => '/posts/1'
 */
export function buildPath<Path extends keyof PathToParams>(
  path: Path,
  ...params: PathToParams[Path] extends never
    ? [
        params?: {
          searchParams?: Record<string, string | number>
          hash?: string
        }
      ]
    : [
        params: PathToParams[Path] & {
          searchParams?: Record<string, string | number>
          hash?: string
        }
      ]
): string {
  const [pathParams] = params
  if (pathParams === undefined) return path

  return (
    path.replace(/\[(\w+)\]/g, (_, key) => (pathParams as any)[key]) +
    (pathParams.searchParams
      ? '?' + new URLSearchParams(pathParams.searchParams as any).toString()
      : '') +
    (pathParams.hash ? '#' + pathParams.hash : '')
  )
}

/**
 * @example
 * echoPath('/posts/[id]') // => '/posts/[id]'
 */
export function echoPath<Path extends keyof PathToParams>(path: Path): string {
  return path
}

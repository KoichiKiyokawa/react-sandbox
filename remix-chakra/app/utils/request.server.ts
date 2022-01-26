export const parseRequest = async <T>(request: Request): Promise<T> => {
  const body = await request.formData()
  const res = {} as any
  body.forEach((value, key) => {
    res[key] = value
  })

  return res as T
}

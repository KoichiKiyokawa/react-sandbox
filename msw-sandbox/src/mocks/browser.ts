import { RequestHandler, setupWorker } from "msw"

const modules = import.meta.glob("./handlers/*.ts", {
  eager: true,
  import: "default",
})

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  ...((
    await Promise.all(Object.values(modules))
  ).flat() as unknown as RequestHandler[])
)

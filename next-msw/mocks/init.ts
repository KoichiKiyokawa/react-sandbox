if (typeof window === "undefined") {
  import("@/mocks/node").then((mod) => mod.server.listen());
} else {
  import("@/mocks/browser").then((mod) =>
    mod.worker.start({ onUnhandledRequest: "bypass" })
  );
}

export {};

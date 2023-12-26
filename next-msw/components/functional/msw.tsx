"use client";

if (process.env.NEXT_PUBLIC_ENABLE_MSW === "true") {
  import("@/mocks/init");
  let waitPromiseCache: Promise<void>;

  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (...args: Parameters<typeof fetch>) => {
    waitPromiseCache ??= new Promise((res) => setTimeout(res, 500));
    await waitPromiseCache;
    return await originalFetch(...args);
  };
}

export function Msw() {
  return null;
}

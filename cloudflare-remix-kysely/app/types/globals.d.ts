declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
  }
}

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    env: {
      DB: D1Database;
    };
  }
}

export {};

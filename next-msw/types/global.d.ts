// process.envの型定義
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENABLE_MSW: "true" | "false";
  }
}

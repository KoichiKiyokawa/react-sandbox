import { useRouter } from "next/router";

export const useRouteParam = <T extends Record<string, unknown>>() => {
  const router = useRouter();
  return router.query as T;
};

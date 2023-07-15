import { NoopLayout } from "@/components/layout/noop-layout";

// workaround for https://github.com/vercel/next.js/issues/48022
export const generateStaticParams = () => [{ id: "_id" }];

export default NoopLayout;

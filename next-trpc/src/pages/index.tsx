import { Loading } from "@/components/Loading";
import { useAlertError } from "@/hooks/useAlertError";
import { trpc } from "@/lib/trpc.client";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data: todos, error } = trpc.useQuery(["todos"]);

  useAlertError(error);

  if (todos === undefined) return <Loading />;

  return <div>{JSON.stringify(todos, null, 2)}</div>;
};

export default Home;

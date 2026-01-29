import { useQuery } from "@tanstack/react-query";
import { orpc } from "~/api/client";

export default function UserList() {
  const { data, error, isLoading } = useQuery(orpc.user.list.queryOptions());

  console.log({ data, isLoading });

  if (isLoading) return null;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

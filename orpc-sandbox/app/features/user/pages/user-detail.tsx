import { useQuery } from "@tanstack/react-query";
import { orpc } from "~/api/client";
import type { Route } from "./+types/user-detail";

export function UserDetailPage({ params }: Route.ComponentProps) {
  const { data, isPending } = useQuery(
    orpc.user.detail.queryOptions({ input: { id: params.id } })
  );
}

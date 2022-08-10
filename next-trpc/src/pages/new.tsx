import { trpc } from "@/lib/trpc.client";

export function NewPage() {
  const { mutate: createTodo } = trpc.useMutation(["createTodo"]);

  return <div></div>;
}

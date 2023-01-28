import { useRouteParam } from "@/features/core/hooks/useRouteParam";
import { trpc } from "@/lib/trpc/client";
import { buildPath } from "@/path";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostShowPage() {
  const router = useRouter();
  const param = useRouteParam<{ id: string }>();
  const id = Number(param.id);
  const { data } = trpc.post.show.useQuery({ id });
  const mutation = trpc.post.delete.useMutation();

  const handleDelete = () => {
    mutation.mutate(
      { id: Number(id) },
      {
        onSuccess: () => {
          router.push(buildPath("/"));
        },
      }
    );
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Link href={buildPath("/")}>go to top</Link>
      <h1>PostShowPage</h1>
      <Link href={buildPath("/[id]/edit", { id })}>edit</Link>
      <h2>{data.title}</h2>
      <pre>{data.content}</pre>

      <button onClick={handleDelete} disabled={mutation.isLoading}>
        delete
      </button>
    </div>
  );
}

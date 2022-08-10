import { TodoList } from "@/features/todo/components/TodoList";
import { Todo } from "@/models/todo";
import ky from "ky";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLockBodyScroll } from "react-use";
import useSWR from "swr";

export default function TodoModal() {
  const router = useRouter();
  const { id } = router.query;
  const { data: todo, error } = useSWR(
    id === undefined ? null : ["https://jsonplaceholder.typicode.com/todos/", id],
    (url, id) => ky.get(url + id).json<Todo>()
  );
  useLockBodyScroll(true);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <>
      <TodoList />
      <dialog
        open
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxSizing: "border-box",
          margin: 0,
        }}
      >
        {todo === undefined ? <span>Loading...</span> : <div>{JSON.stringify(todo, null, 2)}</div>}
        <Link scroll={false} href="/">
          close
        </Link>
      </dialog>
    </>
  );
}

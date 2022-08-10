import { Todo } from "@/models/todo";
import ky from "ky";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";

export function TodoList() {
  const { data: todos, error } = useSWR("https://jsonplaceholder.typicode.com/todos/", (url) =>
    ky.get(url).json<Todo[]>()
  );

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  if (todos === undefined) return <span>Loading...</span>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link scroll={false} href={todo.id.toString()}>
            {JSON.stringify(todo, null, 2)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

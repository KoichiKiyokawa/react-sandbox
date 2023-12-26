import { queryOptions } from "@tanstack/react-query";
import ky from "ky";
import { User } from "./type";

export const getUsersQueryOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () =>
      ky.get("https://jsonplaceholder.typicode.com/users").json<User[]>(),
  });

export const getUserQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["user", id],
    queryFn: () =>
      ky.get(`https://jsonplaceholder.typicode.com/users/${id}`).json<User>(),
  });

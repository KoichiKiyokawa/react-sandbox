import createHooks from "@kiyoshiro/openapi-swr";
import { paths } from "../openapi-swr/types/__generated";
import createClient from "openapi-fetch";
import camelcaseKeys from "camelcase-keys";

const client = createClient<paths>();
const { useQuery } = createHooks(client);

function Main() {
  const { data, error } = useQuery("get", "/users", {
    params: { query: { page: 0, per: 10 } },
    converter: (data) => camelcaseKeys(data),
    tags: ["users"],
  });
}

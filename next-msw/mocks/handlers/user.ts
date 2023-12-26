import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";

const createDummyUser = (params?: { id: string }) => ({
  id: params?.id ?? faker.string.uuid(),
  name: faker.internet.userName(),
  email: faker.internet.email(),
});

const dummyUsers = Array.from({ length: 100 }, createDummyUser);

export const userListHandler = http.get<Record<"per" | "page", string>>(
  "/api/users",
  (req) => {
    const per = Number(req.params.per);
    const page = Number(req.params.page);
    HttpResponse.json(dummyUsers.slice(per * page, per * (page + 1)));
  }
);

export const userDetailHandler = http.get<Record<"id", string>>(
  "/api/users/:id",
  (req) => {
    const id = req.params.id;
    HttpResponse.json(createDummyUser({ id: req.params.id }));
  }
);

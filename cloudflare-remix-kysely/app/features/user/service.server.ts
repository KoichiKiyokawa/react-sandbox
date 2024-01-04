import { randomUUID } from "crypto";
import { z } from "zod";
import { BaseService } from "../core/service.server";

export class UserService extends BaseService {
  findAll() {
    return this.dbClient.selectFrom("User").selectAll().execute();
  }

  findById(id: string) {
    return this.dbClient.selectFrom("User").where("id", "==", id).execute();
  }

  private CreateUserSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3).max(32),
  });
  create(data: z.infer<typeof this.CreateUserSchema>) {
    const res = this.CreateUserSchema.safeParse(data);
    if (!res.success) return { errors: res.error.formErrors.fieldErrors };

    return this.dbClient
      .insertInto("User")
      .values({ id: randomUUID(), ...res.data })
      .execute();
  }

  private UpdateUserSchema = this.CreateUserSchema.merge(
    z.object({
      id: z.string().uuid(),
    })
  );
  update(data: z.infer<typeof this.UpdateUserSchema>) {
    const res = this.UpdateUserSchema.safeParse(data);
    if (!res.success) return { errors: res.error.formErrors.fieldErrors };

    return this.dbClient
      .updateTable("User")
      .set(res.data)
      .where("id", "==", res.data.id)
      .execute();
  }
}

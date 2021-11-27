import { db } from "~/utils/db.server"

export class UserService {
  static incrementLike(userId: string) {
    return db.user.update({
      where: { id: userId },
      data: { likes: { increment: 1 } },
    })
  }
}

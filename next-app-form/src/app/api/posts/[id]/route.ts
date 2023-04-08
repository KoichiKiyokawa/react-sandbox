import { db } from "@/lib/db"

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  await db.post.update({
    where: { id: id },
    data: await request.json(),
  })
}

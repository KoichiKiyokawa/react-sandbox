// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FormProps } from "@/pages/new"
import { db } from "@/lib/db"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "get": {
      const posts = await db.post.findMany()
      return res.status(200).json(posts)
    }
    case "post": {
      const { title, content } = req.body as FormProps
      await db.post.create({ data: { title, content, authorId: 1 } })
      return res.status(201)
    }
    default:
      res.status(404)
  }
}

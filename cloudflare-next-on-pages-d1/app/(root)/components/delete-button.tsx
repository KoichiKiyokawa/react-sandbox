"use client"

import { deleteUser } from "../action"

export const DeleteButton = ({ userId }: { userId: string }) => {
  return (
    <button onClick={() => deleteUser(userId)} className="border">
      delete
    </button>
  )
}

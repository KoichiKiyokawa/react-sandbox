"use client";

import { createItem } from "./actions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
    >
      {pending ? "作成中..." : "作成 (重い処理を実行)"}
    </button>
  );
}

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          新規アイテム作成
        </h1>

        <form
          action={createItem}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              タイトル
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="タイトルを入力してください"
            />
          </div>

          <div className="flex items-center space-x-4">
            <SubmitButton />
            <a
              href="/list"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              キャンセル
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

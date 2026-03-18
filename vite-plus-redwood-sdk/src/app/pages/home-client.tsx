"use client";

import { useFormStatus } from "react-dom";

import type { Todo } from "@/db/schema";

import { createTodo, deleteTodo, toggleTodo } from "./home-actions";

const SubmitButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button className={className} type="submit" disabled={pending}>
      {pending ? "Saving..." : children}
    </button>
  );
};

export const HomeClient = ({
  items,
  completedCount,
}: {
  items: Todo[];
  completedCount: number;
}) => {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6">
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[linear-gradient(145deg,rgba(255,247,238,0.96),rgba(249,241,232,0.9))] p-8 shadow-[0_24px_80px_rgba(78,55,34,0.12)]">
          <span className="inline-flex w-fit rounded-full bg-orange-500/12 px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-orange-700">
            Vite + RedwoodSDK + Drizzle
          </span>
          <div className="mt-5 grid gap-6">
            <div>
              <h1 className="font-serif text-5xl leading-[0.92] font-semibold sm:text-6xl lg:text-[5.4rem]">
                Todo Flow
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-stone-500 sm:text-lg">
                RedwoodSDK をフレームワークに、Drizzle ORM と SQLite
                ベースの D1 で組んだ、サーバー主導の軽い Todo アプリです。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-stone-200/80 bg-white/70 p-5">
                <span className="block font-serif text-4xl">{items.length}</span>
                <span className="mt-1.5 block text-sm text-stone-500">
                  全タスク
                </span>
              </div>
              <div className="rounded-[1.4rem] border border-stone-200/80 bg-white/70 p-5">
                <span className="block font-serif text-4xl">
                  {items.length - completedCount}
                </span>
                <span className="mt-1.5 block text-sm text-stone-500">
                  進行中
                </span>
              </div>
              <div className="rounded-[1.4rem] border border-stone-200/80 bg-white/70 p-5">
                <span className="block font-serif text-4xl">
                  {completedCount}
                </span>
                <span className="mt-1.5 block text-sm text-stone-500">
                  完了済み
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <section className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-7 shadow-[0_24px_80px_rgba(78,55,34,0.12)] backdrop-blur-sm">
            <h2 className="font-serif text-3xl">新しいタスク</h2>
            <p className="mt-2.5 text-sm leading-7 text-stone-500 sm:text-base">
              入力して追加、完了したら切り替え、不要なら削除できます。
            </p>
            <form action={createTodo} className="mt-5 grid gap-3.5">
              <input
                className="w-full rounded-[1.1rem] border border-stone-200 bg-white px-4 py-4 text-base outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-500/15"
                type="text"
                name="title"
                placeholder="例: Drizzle migration を流す"
                required
                maxLength={120}
              />
              <SubmitButton className="rounded-[1.1rem] bg-orange-600 px-4 py-4 text-base font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70">
                Add Todo
              </SubmitButton>
            </form>
          </section>

          <section className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-7 shadow-[0_24px_80px_rgba(78,55,34,0.12)] backdrop-blur-sm">
            <h2 className="font-serif text-3xl">タスクリスト</h2>
            <p className="mt-2.5 text-sm leading-7 text-stone-500 sm:text-base">
              JavaScript に頼りすぎず、フォーム送信で確実に更新する構成です。
            </p>
            <div className="mt-5 grid gap-3.5">
              {items.length === 0 ? (
                <div className="rounded-[1.4rem] border border-dashed border-stone-300 bg-white/60 px-6 py-7 text-center text-stone-500">
                  最初の Todo を追加するとここに表示されます。
                </div>
              ) : (
                items.map((todo) => (
                  <article
                    key={todo.id}
                    className="grid gap-4 rounded-[1.4rem] border border-stone-200 bg-stone-50/90 p-5 lg:grid-cols-[1fr_auto]"
                  >
                    <div className="grid gap-2.5">
                      <h3
                        className={[
                          "text-base leading-6",
                          todo.completed ? "text-stone-400 line-through" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {todo.title}
                      </h3>
                      <div className="text-sm text-stone-500">
                        {todo.completed ? "完了済み" : "未完了"} · #{todo.id}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      <form action={toggleTodo}>
                        <input type="hidden" name="id" value={todo.id} />
                        <SubmitButton className="rounded-2xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 transition hover:border-emerald-300 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-70">
                          {todo.completed ? "未完了に戻す" : "完了にする"}
                        </SubmitButton>
                      </form>

                      <form action={deleteTodo}>
                        <input type="hidden" name="id" value={todo.id} />
                        <SubmitButton className="rounded-2xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 transition hover:border-orange-300 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-70">
                          削除
                        </SubmitButton>
                      </form>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

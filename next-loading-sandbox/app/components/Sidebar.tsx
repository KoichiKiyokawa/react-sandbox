"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-6 flex flex-col border-r border-gray-200 dark:border-gray-700">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Next Loading</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Sandbox</p>
      </div>

      <nav className="space-y-2 flex-1">
        <Link
          href="/list"
          className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          📋 アイテム一覧
        </Link>
        <Link
          href="/create"
          className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          ➕ アイテム作成
        </Link>
      </nav>

      <button
        onClick={toggleTheme}
        className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium"
      >
        {theme === "light" ? "🌙 ダークモード" : "☀️ ライトモード"}
      </button>
    </aside>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ローディング検証アプリ
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          重い処理のローディング挙動を検証するためのアプリケーションです
        </p>
        <div className="space-y-4">
          <a
            href="/list"
            className="block w-full max-w-md mx-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            一覧画面（重いデータ読み込み）
          </a>
          <a
            href="/create"
            className="block w-full max-w-md mx-auto px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            作成画面（重い処理実行）
          </a>
        </div>
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">検証内容</h2>
          <ul className="text-left space-y-2 text-gray-600">
            <li>• 一覧画面：3秒の遅延 + 1000件のデータ表示</li>
            <li>• 作成画面：5秒の重い処理 + 大量データ生成</li>
            <li>• 各画面でローディング状態のUIを確認</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

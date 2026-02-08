interface Item {
  id: number
  name: string
  description: string}

async function getHeavyItems(): Promise<Item[]> {
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `アイテム ${i + 1}`,
    description: `これは非常に重い処理によって生成されたアイテム ${i + 1} の説明です。大量のデータを処理するシミュレーションを行っています。`
  }))
}

export default async function ListPage() {
  const items = await getHeavyItems()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">アイテム一覧</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
            <p className="text-sm text-gray-600">
              全 {items.length} 件のアイテムが表示されています
            </p>
          </div>
          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      ID: {item.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <a
            href="/create"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            新規作成画面へ
          </a>
        </div>
      </div>
    </div>
  )
}
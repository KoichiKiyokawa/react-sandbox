'use server'

import { redirect } from 'next/navigation'

export async function createItem(formData: FormData) {
  const title = formData.get('title') as string
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  const heavyProcessing = Array.from({ length: 10000 }, (_, i) => ({
    id: Date.now() + i,
    timestamp: new Date().toISOString(),
    data: `${title}`.repeat(10)
  }))
  
  console.log('重い処理完了:', heavyProcessing.length, '件のデータを処理')
  
  redirect('/list?message=' + encodeURIComponent(`アイテム「${title}」を作成しました！(${heavyProcessing.length}件のデータ処理完了)`))
}
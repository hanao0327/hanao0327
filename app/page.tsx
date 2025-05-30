export default function HomePage() {
  return (
    <div className="container mx-auto py-16">
      {/* ドミトリーの紹介 */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">ドミトリーとは</h1>
        <p className="text-lg">
          ドミトリーは、快適で手頃な価格の宿泊施設を提供する共同生活型の宿泊施設です。
          短期滞在から長期滞在まで、さまざまなニーズに対応しています。
        </p>
      </section>

      {/* 設備内容 */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">設備内容</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>無料Wi-Fi</li>
          <li>共用キッチン</li>
          <li>ランドリー設備</li>
          <li>快適なラウンジスペース</li>
          <li>24時間セキュリティ</li>
        </ul>
      </section>

      {/* アクセス */}
      <section id="access">
        <h2 className="text-3xl font-semibold mb-6">アクセス</h2>
        <p className="text-lg">
          当施設は、主要な公共交通機関から徒歩5分の便利な場所に位置しています。
          詳細なアクセス情報は以下のリンクをご覧ください。
        </p>
        <div className="mt-4">
          <a
            href="/access"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            アクセス情報を見る
          </a>
        </div>
      </section>
    </div>
  );
}

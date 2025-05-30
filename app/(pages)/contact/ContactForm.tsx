'use client';
export default function ContactForm() {
  return (
    <div>
      {/* お問い合わせフォーム */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">お問い合わせフォーム</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium">お名前</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="お名前を入力してください"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">メールアドレス</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              placeholder="メールアドレスを入力してください"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              お問い合わせ内容
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded"
              rows={5}
              placeholder="お問い合わせ内容を入力してください"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            送信
          </button>
        </form>
      </section>
    </div>
  );
}

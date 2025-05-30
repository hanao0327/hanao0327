export default function LoginPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">ログイン</h1>
      <form className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="メールアドレスを入力してください"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="password">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="パスワードを入力してください"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          ログイン
        </button>
        <p className="text-center mt-4">
          アカウントをお持ちでないですか？{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            新規登録
          </a>
        </p>
      </form>
    </div>
  );
}

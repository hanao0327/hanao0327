'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // パスワードのバリデーション
    if (password !== confirmPassword) {
      setError('パスワードが一致しません。');
      return;
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setError('パスワードは英数字を含む8文字以上で入力してください。');
      return;
    }

    // バリデーション成功時にログインページにリダイレクト
    router.push('/login');
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">アカウント作成</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 shadow-md rounded"
      >
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            お名前
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded"
            placeholder="お名前を入力してください"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="password">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-lg font-medium mb-2"
            htmlFor="confirm-password"
          >
            パスワード（確認用）
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border rounded"
            placeholder="もう一度パスワードを入力してください"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          アカウント作成
        </button>
        <p className="text-center mt-4">
          すでにアカウントをお持ちですか？{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            ログイン
          </a>
        </p>
      </form>
    </div>
  );
}

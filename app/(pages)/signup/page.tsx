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
    <div className="container mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
        アカウント作成
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-4 sm:p-6 md:p-8 shadow-md rounded-lg"
      >
        <div className="mb-3 md:mb-4">
          <label
            className="block text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2"
            htmlFor="name"
          >
            お名前
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="お名前を入力してください"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 md:mb-4">
          <label
            className="block text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2"
            htmlFor="email"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 md:mb-4">
          <label
            className="block text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2"
            htmlFor="password"
          >
            パスワード
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 md:mb-6">
          <label
            className="block text-sm sm:text-base md:text-lg font-medium mb-1 md:mb-2"
            htmlFor="confirm-password"
          >
            パスワード（確認用）
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="もう一度パスワードを入力してください"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && (
          <p className="text-red-500 text-center mb-3 md:mb-4 text-sm md:text-base">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 md:py-3 text-sm md:text-base rounded hover:bg-blue-600 transition-colors duration-200"
        >
          アカウント作成
        </button>
        <p className="text-center mt-3 md:mt-4 text-sm md:text-base">
          すでにアカウントをお持ちですか？{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            ログイン
          </a>
        </p>
      </form>
    </div>
  );
}

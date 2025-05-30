'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [name, setName] = useState('山田 太郎');
  const [nickname, setNickname] = useState('たろう');
  const [email, setEmail] = useState('example@example.com');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('男性');
  const [hobbies, setHobbies] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    '/default-profile.png' // 初期アイコンのパス
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // プロフィール更新処理（仮）
    setSuccessMessage('プロフィールが更新されました！');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file)); // 選択した画像をプレビュー
    }
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">プロフィール編集</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 shadow-md rounded"
      >
        {/* プロフィール写真 */}
        <div className="mb-4 text-center">
          <p className="block text-lg font-medium mb-2">プロフィール写真</p>
          <div className="relative w-32 h-32 mx-auto">
            <input
              type="file"
              id="profileImage"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label htmlFor="profileImage" className="cursor-pointer">
              <img
                src={profileImagePreview || '/default-profile.png'}
                alt="プロフィール画像"
                className="w-32 h-32 rounded-full object-cover border"
              />
            </label>
          </div>
        </div>

        {/* お名前 */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            お名前
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* ニックネーム */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="nickname">
            ニックネーム
          </label>
          <input
            type="text"
            id="nickname"
            className="w-full px-4 py-2 border rounded"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        {/* メールアドレス */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* 自己紹介 */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="bio">
            自己紹介
          </label>
          <textarea
            id="bio"
            className="w-full px-4 py-2 border rounded"
            rows={4}
            placeholder="自己紹介を入力してください"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        {/* 性別 */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">性別</label>
          <select
            className="w-full px-4 py-2 border rounded"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="男性">男性</option>
            <option value="女性">女性</option>
            <option value="その他">その他</option>
          </select>
        </div>

        {/* 趣味 */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="hobbies">
            趣味
          </label>
          <input
            type="text"
            id="hobbies"
            className="w-full px-4 py-2 border rounded"
            placeholder="趣味を入力してください"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>

        {/* パスワード変更 */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="password">
            パスワード（変更する場合のみ入力）
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="新しいパスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          更新する
        </button>
      </form>
    </div>
  );
}

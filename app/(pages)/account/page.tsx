'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './account.module.css';

// アカウントカスタマイズページ
export default function AccountCustomizePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // ユーザープロフィール状態
  const [profile, setProfile] = useState({
    name: '山田 太郎',
    email: 'example@email.com',
    phone: '090-1234-5678',
    profileImage: '/images/icon.png', // '/images/default-avatar.png'から変更
    bio: 'ドミトリー真志の利用者です。よろしくお願いします。',
  });

  // タブ切り替え
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSuccessMessage('');
  };

  // プロフィール更新処理
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // ここでAPIリクエストを実行するか、状態を更新
    setTimeout(() => {
      setIsSaving(false);
      setSuccessMessage('プロフィール情報が更新されました');
    }, 800);
  };

  // プロフィール入力変更処理
  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // プロフィール画像アップロード処理
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ここで実際にはアップロードするロジックを実装
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        profileImage: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.customizePage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>アカウント設定</h1>
          <p className={styles.pageDescription}>
            アカウント情報やプロフィールを管理します
          </p>
        </div>

        {successMessage && (
          <div className={styles.successMessage}>
            <svg
              className={styles.successIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{successMessage}</span>
          </div>
        )}

        <div className={styles.customizeLayout}>
          <div className={styles.tabNavigation}>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'profile' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabChange('profile')}
            >
              <svg
                className={styles.tabIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              プロフィール
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'security' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabChange('security')}
            >
              <svg
                className={styles.tabIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              セキュリティ
            </button>
          </div>

          <div className={styles.contentArea}>
            {activeTab === 'profile' && (
              <div className={styles.tabContent}>
                <h2 className={styles.tabTitle}>プロフィール情報</h2>
                <form onSubmit={handleProfileUpdate}>
                  <div className={styles.profileImageSection}>
                    <div className={styles.profileImageContainer}>
                      <Image
                        src={profile.profileImage}
                        alt="プロフィール画像"
                        width={100}
                        height={100}
                        className={styles.profileImage}
                      />
                      <label
                        htmlFor="profileImage"
                        className={styles.imageUploadButton}
                      >
                        <svg
                          className={styles.uploadIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                      <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                        className={styles.hiddenInput}
                      />
                    </div>
                    <p className={styles.imageHelpText}>
                      クリックして画像をアップロード（JPG, PNG形式, 最大2MB）
                    </p>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.inputLabel}>
                        名前
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className={styles.input}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.inputLabel}>
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.inputLabel}>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="bio" className={styles.inputLabel}>
                      自己紹介
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={profile.bio}
                      onChange={handleProfileChange}
                      className={styles.textarea}
                      rows={4}
                    ></textarea>
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="submit"
                      className={styles.primaryButton}
                      disabled={isSaving}
                    >
                      {isSaving ? '保存中...' : '変更を保存'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'security' && (
              <div className={styles.tabContent}>
                <h2 className={styles.tabTitle}>セキュリティ設定</h2>

                <div className={styles.securitySection}>
                  <h3 className={styles.tabTitle}>パスワード変更</h3>
                  <form>
                    <div className={styles.formGroup}>
                      <label
                        htmlFor="currentPassword"
                        className={styles.inputLabel}
                      >
                        現在のパスワード
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        className={styles.input}
                        placeholder="••••••••"
                      />
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="newPassword"
                          className={styles.inputLabel}
                        >
                          新しいパスワード
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          className={styles.input}
                          placeholder="••••••••"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label
                          htmlFor="confirmPassword"
                          className={styles.inputLabel}
                        >
                          新しいパスワード（確認）
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className={styles.input}
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div className={styles.passwordRequirements}>
                      <p className={styles.requirementTitle}>
                        パスワードの要件：
                      </p>
                      <ul className={styles.requirementList}>
                        <li>8文字以上</li>
                        <li>大文字と小文字を含む</li>
                        <li>数字を1つ以上含む</li>
                        <li>特殊文字を1つ以上含む</li>
                      </ul>
                    </div>

                    <div className={styles.formActions}>
                      <button type="submit" className={styles.primaryButton}>
                        パスワードを変更
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

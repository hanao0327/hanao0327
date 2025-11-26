'use client'; // クライアントコンポーネントに変更

import { useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  // アクセス情報のタブ切り替え用state
  const [activeLocation, setActiveLocation] = useState('tokoname');

  return (
    <div>
      {/* 上部余白と背景画像 */}
      <div className={styles.heroSection}>
        <div className={styles.conceptText}>
          <p>
            古きを生かし、
            <br />
            未来を創る。{/* 改行を追加 */}
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* ドミトリーの紹介 - デザイン重視に変更 */}
        <section className={styles.dormitorySection}>
          <h2 className={styles.dormitoryHeading}>ドミトリーとは</h2>
          <div className={styles.dormitoryDivider}></div>

          <div className={styles.dormitoryContainer}>
            <div className={styles.dormitoryImageWrapper}>
              <img
                src="/images/dormitory-image.jpg"
                alt="ドミトリーイメージ"
                className={styles.dormitoryImage}
              />
              <div className={styles.dormitoryImageOverlay}>
                <span>DORMITORY</span>
              </div>
            </div>

            <div className={styles.dormitoryContent}>
              <div className={styles.dormitoryFeature}>
                <div className={styles.dormitoryFeatureIcon}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24">
                    <path d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20Z" />
                  </svg>
                </div>
                <div className={styles.dormitoryFeatureText}>
                  <h3 className={styles.dormitoryFeatureTitle}>
                    相部屋の宿泊施設
                  </h3>
                  <p className={styles.dormitoryFeatureDescription}>
                    ドミトリーは、知らない人同士が同じ部屋で寝泊まりし交流のできる相部屋の宿泊施設です。
                  </p>
                </div>
              </div>

              <div className={styles.dormitoryFeature}>
                <div className={styles.dormitoryFeatureIcon}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24">
                    <path d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v6H7v-6a5 5 0 0 1 5-5m0-10a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" />
                  </svg>
                </div>
                <div className={styles.dormitoryFeatureText}>
                  <h3 className={styles.dormitoryFeatureTitle}>
                    プライバシーと交流
                  </h3>
                  <p className={styles.dormitoryFeatureDescription}>
                    ご自身のプライベートを守りながらも、他の旅行者との交流ができる絶妙なバランスの空間です。
                  </p>
                </div>
              </div>

              <div className={styles.dormitoryFeature}>
                <div className={styles.dormitoryFeatureIcon}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24">
                    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm3 3c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16zm3-3c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z" />
                  </svg>
                </div>
                <div className={styles.dormitoryFeatureText}>
                  <h3 className={styles.dormitoryFeatureTitle}>特別な体験</h3>
                  <p className={styles.dormitoryFeatureDescription}>
                    ドミトリーならではの少し変わった寝泊りを楽しめる、旅の新しい形の体験ができます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 設備内容 - デザイン重視に変更 */}
        <section className={styles.facilitiesSection}>
          <h2 className={styles.facilitiesHeading}>設備内容</h2>
          <div className={styles.facilitiesDivider}></div>

          <div className={styles.facilitiesGrid}>
            {/* 共有スペース */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/share.jpg"
                  alt="共有スペース"
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>COMMON SPACE</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>共有スペース</h3>
                <p className={styles.facilityDescription}>
                  他の旅行者との交流を楽しめる開放的な空間です。
                </p>
              </div>
            </div>

            {/* キッチン */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/kitchen.jpg"
                  alt="キッチン"
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>KITCHEN</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>キッチン</h3>
                <p className={styles.facilityDescription}>
                  自炊可能な設備が整ったキッチンを完備しています。
                </p>
              </div>
            </div>

            {/* ベッドルーム */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/bedroom.jpg"
                  alt="ベッドルーム"
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>BEDROOM</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>ベッドルーム</h3>
                <p className={styles.facilityDescription}>
                  快適な睡眠環境を提供するベッドスペースです。
                </p>
              </div>
            </div>

            {/* ロッカー */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/locker.jpg"
                  alt="ロッカー"
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>LOCKER</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>ロッカー</h3>
                <p className={styles.facilityDescription}>
                  貴重品を安全に保管できるセキュリティロッカーです。
                </p>
              </div>
            </div>

            {/* バスルーム */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/bathroom.jpg"
                  alt="バスルーム"
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>BATHROOM</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>バスルーム</h3>
                <p className={styles.facilityDescription}>
                  清潔で使いやすいバスルームを完備しています。
                </p>
              </div>
            </div>

            {/* トイレ */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/toilet.jpg"
                  alt="トイレ"
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>TOILET</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>トイレ</h3>
                <p className={styles.facilityDescription}>
                  清潔なトイレを常に維持しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス - 切り替え可能なタブデザインに変更 */}
        <section id="access" className={styles.accessSection}>
          <h2 className={styles.accessHeading}>アクセス</h2>
          <div className={styles.accessDivider}></div>

          {/* アクセス説明文 */}
          <div className={styles.accessDescription}>
            <p className={styles.accessIntro}>
              ドミトリー真志は常滑市と岡崎市に拠点を構えています。詳細なアクセス情報は以下をご覧ください。
            </p>
          </div>

          {/* ロケーション切り替えタブ */}
          <div className={styles.locationTabs}>
            <button
              className={`${styles.locationTab} ${activeLocation === 'tokoname' ? styles.activeTab : ''}`}
              onClick={() => setActiveLocation('tokoname')}
            >
              <span className={styles.locationIcon}>📍</span>常滑店
            </button>
            <button
              className={`${styles.locationTab} ${activeLocation === 'okazaki' ? styles.activeTab : ''}`}
              onClick={() => setActiveLocation('okazaki')}
            >
              <span className={styles.locationIcon}>📍</span>岡崎店
            </button>
          </div>

          {/* アクセス情報（常滑） */}
          <div
            className={`${styles.locationContent} ${activeLocation === 'tokoname' ? styles.activeContent : ''}`}
          >
            <div className={styles.accessCardContainer}>
              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>住所</h3>
                <p className={styles.accessCardText}>
                  愛知県常滑市市場町1丁目26
                </p>
              </div>

              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12L12 22l6.14-6.88C19.3 13.73 20 11.95 20 10c0-4.42-3.58-8-8-8zm-2 9.5v-2h4v2h-4z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>最寄り駅</h3>
                <p className={styles.accessCardText}>
                  名鉄常滑線 常滑駅から徒歩15分
                </p>
              </div>

              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>電話番号</h3>
                <p className={styles.accessCardText}>090-1255-4721</p>
              </div>

              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>メールアドレス</h3>
                <p className={styles.accessCardText}>tokoname@domitory.jp</p>
              </div>
            </div>

            {/* 地図（常滑） */}
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.705829794927!2d136.82808571185835!3d34.88378557472682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60049bcab24f28b7%3A0xee1877fb37053bc0!2z5a6u44Gu6YeO6KW_6ZaL!5e0!3m2!1sja!2sjp!4v1687133003252!5m2!1sja!2sjp"
                className={styles.mapFrame}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* アクセス情報（岡崎） */}
          <div
            className={`${styles.locationContent} ${activeLocation === 'okazaki' ? styles.activeContent : ''}`}
          >
            <div className={styles.accessCardContainer}>
              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>住所</h3>
                <p className={styles.accessCardText}>
                  愛知県岡崎市明大寺町字長泉8
                </p>
              </div>

              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12L12 22l6.14-6.88C19.3 13.73 20 11.95 20 10c0-4.42-3.58-8-8-8zm-2 9.5v-2h4v2h-4z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>最寄り駅</h3>
                <p className={styles.accessCardText}>
                  名鉄名古屋本線 東岡崎駅から徒歩10分
                </p>
              </div>

              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>電話番号</h3>
                <p className={styles.accessCardText}>090-8546-7832</p>
              </div>

              <div className={styles.accessCard}>
                <div className={styles.accessIconWrapper}>
                  <svg
                    className={styles.accessIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className={styles.accessCardTitle}>メールアドレス</h3>
                <p className={styles.accessCardText}>okazaki@domitory.jp</p>
              </div>
            </div>

            {/* 地図（岡崎） */}
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.0422903873824!2d137.16835857404685!3d34.95705517311124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60050e31d0f7dfdd%3A0x27b63e0cdd9375f6!2z44CSNDQwLTAwMDIg5oSb55-l55yM5bKh5bSO5biC5piO5aSn5a-677yY!5e0!3m2!1sja!2sjp!4v1687133170265!5m2!1sja!2sjp"
                className={styles.mapFrame}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

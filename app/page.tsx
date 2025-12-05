'use client'; // クライアントコンポーネントに変更

import { useState } from 'react';
import styles from './Home.module.css';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  // アクセス情報のタブ切り替え用state
  const [activeLocation, setActiveLocation] = useState('tokoname');
  const { t, language } = useLanguage();

  return (
    <div>
      {/* 上部余白と背景画像 */}
      <div className={styles.heroSection}>
        <div className={styles.conceptText}>
          <p>
            {t('home.hero.text1')}
            <br />
            {t('home.hero.text2')}
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* ドミトリーの紹介 - デザイン重視に変更 */}
        <section className={styles.dormitorySection}>
          <h2 className={styles.dormitoryHeading}>
            {t('home.dormitory.title')}
          </h2>
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
                    {t('home.dormitory.feature1.title')}
                  </h3>
                  <p className={styles.dormitoryFeatureDescription}>
                    {t('home.dormitory.feature1.desc')}
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
                    {t('home.dormitory.feature2.title')}
                  </h3>
                  <p className={styles.dormitoryFeatureDescription}>
                    {t('home.dormitory.feature2.desc')}
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
                  <h3 className={styles.dormitoryFeatureTitle}>
                    {t('home.dormitory.feature3.title')}
                  </h3>
                  <p className={styles.dormitoryFeatureDescription}>
                    {t('home.dormitory.feature3.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 設備内容 - デザイン重視に変更 */}
        <section className={styles.facilitiesSection}>
          <h2 className={styles.facilitiesHeading}>
            {t('home.facilities.title')}
          </h2>
          <div className={styles.facilitiesDivider}></div>

          <div className={styles.facilitiesGrid}>
            {/* 共有スペース */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/share.jpg"
                  alt={t('home.facilities.common')}
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>COMMON SPACE</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {t('home.facilities.common')}
                </h3>
                <p className={styles.facilityDescription}>
                  {t('home.facilities.common.desc')}
                </p>
              </div>
            </div>

            {/* キッチン */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/kitchen.jpg"
                  alt={t('home.facilities.kitchen')}
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>KITCHEN</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {t('home.facilities.kitchen')}
                </h3>
                <p className={styles.facilityDescription}>
                  {t('home.facilities.kitchen.desc')}
                </p>
              </div>
            </div>

            {/* ベッドルーム */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/bedroom.jpg"
                  alt={t('home.facilities.bedroom')}
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>BEDROOM</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {t('home.facilities.bedroom')}
                </h3>
                <p className={styles.facilityDescription}>
                  {t('home.facilities.bedroom.desc')}
                </p>
              </div>
            </div>

            {/* ロッカー */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/locker.jpg"
                  alt={t('home.facilities.locker')}
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>LOCKER</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {t('home.facilities.locker')}
                </h3>
                <p className={styles.facilityDescription}>
                  {t('home.facilities.locker.desc')}
                </p>
              </div>
            </div>

            {/* バスルーム */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/bathroom.jpg"
                  alt={t('home.facilities.bathroom')}
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>BATHROOM</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {t('home.facilities.bathroom')}
                </h3>
                <p className={styles.facilityDescription}>
                  {t('home.facilities.bathroom.desc')}
                </p>
              </div>
            </div>

            {/* トイレ */}
            <div className={styles.facilityCard}>
              <div className={styles.facilityImageContainer}>
                <img
                  src="/images/toilet.jpg"
                  alt={t('home.facilities.toilet')}
                  className={styles.facilityImage}
                />
                <div className={styles.facilityOverlay}>
                  <span>TOILET</span>
                </div>
              </div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {t('home.facilities.toilet')}
                </h3>
                <p className={styles.facilityDescription}>
                  {t('home.facilities.toilet.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス - 切り替え可能なタブデザインに変更 */}
        <section id="access" className={styles.accessSection}>
          <h2 className={styles.accessHeading}>{t('home.access.title')}</h2>
          <div className={styles.accessDivider}></div>

          {/* アクセス説明文 */}
          <div className={styles.accessDescription}>
            <p className={styles.accessIntro}>{t('home.access.intro')}</p>
          </div>

          {/* ロケーション切り替えタブ */}
          <div className={styles.locationTabs}>
            <button
              className={`${styles.locationTab} ${activeLocation === 'tokoname' ? styles.activeTab : ''}`}
              onClick={() => setActiveLocation('tokoname')}
            >
              <span className={styles.locationIcon}>📍</span>
              {t('home.access.tokoname')}
            </button>
            <button
              className={`${styles.locationTab} ${activeLocation === 'inuyama' ? styles.activeTab : ''}`}
              onClick={() => setActiveLocation('inuyama')}
            >
              <span className={styles.locationIcon}>📍</span>
              {t('home.access.inuyama')}
            </button>
          </div>

          {/* アクセス情報（常滑） */}
          <div
            className={`${styles.locationContent} ${activeLocation === 'tokoname' ? styles.activeContent : ''}`}
          >
            {/* 常滑店の特徴紹介 */}
            <div className={styles.locationIntro}>
              <h3 className={styles.locationIntroTitle}>
                {t('home.access.tokoname.title')}
              </h3>
              <p className={styles.locationIntroText}>
                {t('home.access.tokoname.desc')}
              </p>
              <div className={styles.locationGallery}>
                <div className={styles.galleryImage}>
                  <img src="/images/tokoname1.jpg" alt="常滑店の外観" />
                </div>
                <div className={styles.galleryImage}>
                  <img src="/images/tokoname2.jpg" alt="常滑店の内装" />
                </div>
              </div>
            </div>
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.address')}
                </h3>
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.station')}
                </h3>
                <p className={styles.accessCardText}>
                  {language === 'ja'
                    ? '名鉄常滑線 常滑駅から徒歩15分'
                    : '15 min walk from Meitetsu Tokoname Station'}
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.phone')}
                </h3>
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.email')}
                </h3>
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

          {/* アクセス情報（犬山） */}
          <div
            className={`${styles.locationContent} ${activeLocation === 'inuyama' ? styles.activeContent : ''}`}
          >
            {/* 犬山店の特徴紹介 */}
            <div className={styles.locationIntro}>
              <h3 className={styles.locationIntroTitle}>
                {t('home.access.inuyama.title')}
              </h3>
              <p className={styles.locationIntroText}>
                {t('home.access.inuyama.desc')}
              </p>
              <div className={styles.locationGallery}>
                <div className={styles.galleryImage}>
                  <img src="/images/inuyama1.jpg" alt="犬山店の外観" />
                </div>
                <div className={styles.galleryImage}>
                  <img src="/images/inuyama2.jpg" alt="犬山店の内装" />
                </div>
              </div>
            </div>
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.address')}
                </h3>
                <p className={styles.accessCardText}>
                  愛知県犬山市犬山西古券60
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.station')}
                </h3>
                <p className={styles.accessCardText}>
                  {language === 'ja'
                    ? '名鉄犬山線 犬山駅から徒歩10分'
                    : '10 min walk from Meitetsu Inuyama Station'}
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.phone')}
                </h3>
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
                <h3 className={styles.accessCardTitle}>
                  {t('home.access.email')}
                </h3>
                <p className={styles.accessCardText}>inuyama@domitory.jp</p>
              </div>
            </div>

            {/* 地図（犬山） */}
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.4539478367147!2d136.94359!3d35.388389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003a5c99b1d4b87%3A0x8f7a1d5c6d9b9a9a!2z54qs5bGx5Z-O!5e0!3m2!1sja!2sjp!4v1687133170265!5m2!1sja!2sjp"
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

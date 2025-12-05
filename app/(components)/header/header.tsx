'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
// CSSファイルをインポート
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* ドミトリーのロゴ */}
        <div className={styles.headerLogo}>
          <img
            src="/images/logo.png"
            alt="ドミトリーロゴ"
            className={styles.logoImage}
          />
        </div>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <div className={styles.headerLogin}>
          {/* 言語切り替えボタン */}
          <button className={styles.languageButton} onClick={toggleLanguage}>
            <span className={styles.languageIcon}>🌐</span>
            {language === 'ja' ? 'EN' : 'JP'}
          </button>
          {/* ログインボタン */}
          <Link href="/login" className={styles.headerLink}>
            {t('nav.login')}
          </Link>
        </div>
      </div>

      {/* オーバーレイ（モバイルメニュー用） */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`}
        onClick={closeMenu}
      ></div>

      <nav
        className={`${styles.headerNav} ${isMenuOpen ? styles.headerNavActive : ''}`}
      >
        <ul className={styles.headerMenu}>
          <li>
            <Link href="/" className={styles.headerLink} onClick={closeMenu}>
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link
              href="/#access"
              className={styles.headerLink}
              onClick={closeMenu}
            >
              {language === 'ja' ? 'アクセス' : 'Access'}
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className={styles.headerLink}
              onClick={closeMenu}
            >
              {t('nav.booking')}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={styles.headerLink}
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
        {/* モバイル用ログイン・言語切り替えリンク */}
        <div className={styles.mobileLogin}>
          <button
            className={styles.mobileLanguageButton}
            onClick={toggleLanguage}
          >
            🌐 {language === 'ja' ? 'English' : '日本語'}
          </button>
          <Link
            href="/login"
            className={styles.mobileLoginLink}
            onClick={closeMenu}
          >
            {t('nav.login')}
          </Link>
        </div>
      </nav>
    </header>
  );
}

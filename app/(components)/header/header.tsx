import Link from 'next/link';
// CSSファイルをインポート
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* ドミトリーのロゴ */}
        <div className={styles.headerLogo}>
          <img
            src="/images/logo.png"
            alt="ドミトリーロゴ"
            className="logo-image"
          />
        </div>
        <div className={styles.headerLogin}>
          {/* Japaneseボタン */}
          <button className={styles.headerLink}>Japanese</button>
          {/* ログインボタン */}
          <Link href="/login" className={styles.headerLink}>
            ログイン
          </Link>
        </div>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerMenu}>
          <li>
            <Link href="/" className={styles.headerLink}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/#access" className={styles.headerLink}>
              アクセス
            </Link>
          </li>
          <li>
            <Link href="/booking" className={styles.headerLink}>
              予約する
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.headerLink}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

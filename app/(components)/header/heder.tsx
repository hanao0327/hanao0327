import Link from 'next/link';
import './heder.css'; // CSSファイルをインポート

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* ドミトリーのロゴ */}
        <div className="header-logo">
          <img
            src="/images/logo.png"
            alt="ドミトリーロゴ"
            className="logo-image"
          />
        </div>
        <div className="header-login">
          {/* Japaneseボタン */}
          <button className="header-link">Japanese</button>
          {/* ログインボタン */}
          <Link href="/login" className="header-link">
            ログイン
          </Link>
        </div>
      </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li>
            <Link href="/" className="header-link">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/#access" className="header-link">
              アクセス
            </Link>
          </li>
          <li>
            <Link href="/booking" className="header-link">
              予約する
            </Link>
          </li>
          <li>
            <Link href="/contact" className="header-link">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

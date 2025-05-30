import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-500 py-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* ドミトリーのロゴ（リンクなし） */}
        <div className="text-2xl text-white font-bold">ドミトリー</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-200">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/#access" className="text-white hover:text-gray-200">
                アクセス
              </Link>
            </li>
            <li>
              <Link href="/booking" className="text-white hover:text-gray-200">
                予約する
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-200">
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-white hover:text-gray-200">
                ログイン
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

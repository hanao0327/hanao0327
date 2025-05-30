import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-500 py-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl text-white font-bold">
          ドミトリー
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="text-white hover:text-gray-200">
                私たちについて
              </Link>
            </li>{' '}
            <li>
              <Link href="/booking" className="text-white hover:text-gray-200">
                予約
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-200">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import './globals.css';
import Header from './(components)/header/heder';

export const metadata = {
  title: 'ドミトリー予約サイト',
  description: '快適で手頃な宿泊施設を予約しましょう。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

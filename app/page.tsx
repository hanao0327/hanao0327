import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      {/* 上部余白と背景画像 */}
      <div className={styles.heroSection}>
        <div className={styles.conceptText}>
          <p>
            思い出のひとつに
            <br />
            真志を、、{/* 改行を追加 */}
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* ドミトリーの紹介 */}
        <section className={styles.section}>
          <h1 className={styles.heading}>ドミトリーとは</h1>
          <p className={styles.text}>
            ドミトリーは、知らない人同士が同じ部屋で寝泊まり交流のできる相部屋の宿泊施設です。
            ご自身のプライベートを守るかつほかの旅行者との交流ができ、ドミトリーならではの少し変わった寝泊りが楽しめます。
          </p>
        </section>

        {/* 設備内容 */}
        <section className={styles.section}>
          <h2 className={styles.heading}>設備内容</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>和風な内装</li>
            <img
              src="/images/japanese-room-style.jpg"
              alt="和風な内装"
              className={styles.equipmentImage}
            />
            <li>共用キッチン</li>
            <li>ランドリー設備</li>
            <li>快適なラウンジスペース</li>
            <li>24時間セキュリティ</li>
          </ul>
        </section>

        {/* アクセス */}
        <section id="access" className={styles.section}>
          <h2 className={styles.heading}>アクセス</h2>
          <div className={styles.accessContainer}>
            {/* アクセス詳細 */}
            <div className={styles.accessDetails}>
              <p className={styles.text}>
                ドミトリー真志は常滑市の中心部に位置し、名鉄常滑線
                常滑駅から徒歩十五分の場所に位置しています。
                詳細なアクセス情報は以下をご覧ください。
              </p>
              <div>
                <h3 className={styles.heading}>住所</h3>
                <p className={styles.text}>愛知県常滑市市場町1丁目26</p>
              </div>
              <div>
                <h3 className={styles.heading}>電話番号</h3>
                <p className={styles.text}>090-1255-4721</p>
              </div>
              <div>
                <h3 className={styles.heading}>メールアドレス</h3>
                <p className={styles.text}>info@domitory.jp</p>
              </div>
            </div>

            {/* 地図 */}
            <div className={styles.mapContainer}>
              <a
                href="https://www.google.com/maps?q=愛知県常滑市市場町1丁目26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.123456789012!2d136.83123456789!3d34.884567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004e1234567890%3A0x1234567890abcdef!2z5oiQ5a2m5aSn5a2m5bGx5Y-w5a2m5aSn5a2m!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp"
                  className={styles.mapFrame}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

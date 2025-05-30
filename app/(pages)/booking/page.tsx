import styles from './page.module.css';

export default function BookingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>宿泊予約</h1>
      <form className={styles.form}>
        <div>
          <label className={styles.label}>お名前</label>
          <input
            type="text"
            className={styles.input}
            placeholder="お名前を入力してください"
          />
        </div>
        <div>
          <label className={styles.label}>メールアドレス</label>
          <input
            type="email"
            className={styles.input}
            placeholder="メールアドレスを入力してください"
          />
        </div>
        <div>
          <label className={styles.label}>チェックイン日</label>
          <input type="date" className={styles.input} />
        </div>
        <div>
          <label className={styles.label}>チェックアウト日</label>
          <input type="date" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>
          送信
        </button>
      </form>
    </div>
  );
}

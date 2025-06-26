// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import styles from './contact.module.css';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  privacy: boolean;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // 実際のAPIエンドポイントに合わせて変更してください
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      console.error('お問い合わせ送信エラー:', error);
      alert('送信に失敗しました。後ほど再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>お問い合わせ</h1>
          <p>
            ドミトリー真志に関するお問い合わせはこちらから。お気軽にご連絡ください。
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h2>お気軽にお問い合わせください</h2>
              <p>
                ドミトリー真志についてのご質問、ご不明点などがございましたら、こちらのフォームからお問い合わせください。24時間以内にスタッフよりご返信いたします。
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Image
                      src="/images/phone-icon.svg"
                      alt="電話"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3>お電話</h3>
                    <p>090-1255-4721</p>
                    <p className={styles.note}>受付時間: 平日 9:00〜18:00</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Image
                      src="/images/email-icon.svg"
                      alt="メール"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3>メール</h3>
                    <p>info@domitory-masamune.com</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Image
                      src="/images/map-icon.svg"
                      alt="住所"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3>住所</h3>
                    <p>〒465-0056</p>
                    <p>愛知県名古屋市名東区野間町61番地高針北住宅A-805</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            {isSubmitted ? (
              <div className={styles.thankYouMessage}>
                <div className={styles.checkmarkIcon}>
                  <Image
                    src="/images/checkmark.svg"
                    alt="送信完了"
                    width={48}
                    height={48}
                  />
                </div>
                <h2>お問い合わせありがとうございます</h2>
                <p>
                  内容を確認次第、担当者よりご連絡いたします。通常は24時間以内にご返信いたします。
                </p>
                <button
                  className={styles.button}
                  onClick={() => setIsSubmitted(false)}
                >
                  新しいお問い合わせ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>お問い合わせフォーム</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    お名前 <span className={styles.required}>必須</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={errors.name ? styles.inputError : styles.input}
                    placeholder="山田 太郎"
                    {...register('name', { required: 'お名前は必須です' })}
                  />
                  {errors.name && (
                    <p className={styles.errorText}>{errors.name.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    メールアドレス <span className={styles.required}>必須</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={errors.email ? styles.inputError : styles.input}
                    placeholder="example@email.com"
                    {...register('email', {
                      required: 'メールアドレスは必須です',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '有効なメールアドレスを入力してください',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className={styles.errorText}>{errors.email.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    電話番号 <span className={styles.optional}>任意</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={styles.input}
                    placeholder="03-1234-5678"
                    {...register('phone')}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">
                    お問い合わせ件名{' '}
                    <span className={styles.required}>必須</span>
                  </label>
                  <select
                    id="subject"
                    className={
                      errors.subject ? styles.inputError : styles.input
                    }
                    {...register('subject', {
                      required: '件名を選択してください',
                    })}
                  >
                    <option value="">選択してください</option>
                    <option value="予約について">予約について</option>
                    <option value="料金について">料金について</option>
                    <option value="設備について">設備について</option>
                    <option value="アクセスについて">アクセスについて</option>
                    <option value="キャンセルについて">
                      キャンセルについて
                    </option>
                    <option value="その他">その他</option>
                  </select>
                  {errors.subject && (
                    <p className={styles.errorText}>{errors.subject.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    お問い合わせ内容{' '}
                    <span className={styles.required}>必須</span>
                  </label>
                  <textarea
                    id="message"
                    className={
                      errors.message ? styles.textareaError : styles.textarea
                    }
                    rows={5}
                    placeholder="お問い合わせ内容を入力してください"
                    {...register('message', {
                      required: 'お問い合わせ内容は必須です',
                      minLength: {
                        value: 10,
                        message: '10文字以上入力してください',
                      },
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className={styles.errorText}>{errors.message.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.checkboxContainer}>
                    <input
                      id="privacy"
                      type="checkbox"
                      className={styles.checkbox}
                      {...register('privacy', {
                        required: 'プライバシーポリシーへの同意は必須です',
                      })}
                    />
                    <label htmlFor="privacy" className={styles.checkboxLabel}>
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        プライバシーポリシー
                      </a>
                      に同意します
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className={styles.errorText}>{errors.privacy.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>よくある質問</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>チェックインとチェックアウトの時間は？</h3>
              <p>
                チェックインは15:00〜22:00、チェックアウトは11:00までとなっております。
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>駐車場はありますか？</h3>
              <p>
                申し訳ございませんが、当施設に専用駐車場はございません。近隣のコインパーキングをご利用ください。
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Wi-Fiは利用できますか？</h3>
              <p>
                はい、全館無料Wi-Fiをご利用いただけます。接続情報はチェックイン時にお知らせします。
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>キャンセル料はいつから発生しますか？</h3>
              <p>
                ご宿泊日の7日前からキャンセル料が発生します。詳細は予約時の規約をご確認ください。
              </p>
            </div>
          </div>
          <div className={styles.moreFaq}>
            <a href="/faq" className={styles.linkButton}>
              その他のよくある質問
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

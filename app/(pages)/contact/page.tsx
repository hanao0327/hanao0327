// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import styles from './contact.module.css';
import { useLanguage } from '../../context/LanguageContext';

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
  const { t, language } = useLanguage();
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
      alert(
        language === 'ja'
          ? '送信に失敗しました。後ほど再度お試しください。'
          : 'Failed to send. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h2>{t('contact.card.title')}</h2>
              <p>{t('contact.card.desc')}</p>

              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <span style={{ fontSize: '24px' }}>📞</span>
                  </div>
                  <div>
                    <h3>{t('contact.phone')}</h3>
                    <p>090-1255-4721</p>
                    <p className={styles.note}>{t('contact.phone.hours')}</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <span style={{ fontSize: '24px' }}>✉️</span>
                  </div>
                  <div>
                    <h3>{t('contact.email')}</h3>
                    <p>info@domitory-masamune.com</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <span style={{ fontSize: '24px' }}>📍</span>
                  </div>
                  <div>
                    <h3>{t('contact.address')}</h3>
                    <p>〒465-0056</p>
                    <p>
                      {language === 'ja'
                        ? '愛知県名古屋市名東区'
                        : ' Meito-ku, Nagoya, Aichi'}
                    </p>
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
                    alt={language === 'ja' ? '送信完了' : 'Sent'}
                    width={48}
                    height={48}
                  />
                </div>
                <h2>{t('contact.thankyou.title')}</h2>
                <p>{t('contact.thankyou.message')}</p>
                <button
                  className={styles.button}
                  onClick={() => setIsSubmitted(false)}
                >
                  {t('contact.thankyou.new')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>{t('contact.form.title')}</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    {t('contact.form.name')}{' '}
                    <span className={styles.required}>
                      {t('contact.form.required')}
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={errors.name ? styles.inputError : styles.input}
                    placeholder={t('contact.form.placeholder.name')}
                    {...register('name', {
                      required:
                        language === 'ja'
                          ? 'お名前は必須です'
                          : 'Name is required',
                    })}
                  />
                  {errors.name && (
                    <p className={styles.errorText}>{errors.name.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    {t('contact.form.email')}{' '}
                    <span className={styles.required}>
                      {t('contact.form.required')}
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={errors.email ? styles.inputError : styles.input}
                    placeholder={t('contact.form.placeholder.email')}
                    {...register('email', {
                      required:
                        language === 'ja'
                          ? 'メールアドレスは必須です'
                          : 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:
                          language === 'ja'
                            ? '有効なメールアドレスを入力してください'
                            : 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className={styles.errorText}>{errors.email.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    {t('contact.form.phone')}{' '}
                    <span className={styles.optional}>
                      {t('contact.form.optional')}
                    </span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={styles.input}
                    placeholder={t('contact.form.placeholder.phone')}
                    {...register('phone')}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">
                    {t('contact.form.subject')}{' '}
                    <span className={styles.required}>
                      {t('contact.form.required')}
                    </span>
                  </label>
                  <select
                    id="subject"
                    className={
                      errors.subject ? styles.inputError : styles.input
                    }
                    {...register('subject', {
                      required:
                        language === 'ja'
                          ? '件名を選択してください'
                          : 'Please select a subject',
                    })}
                  >
                    <option value="">{t('contact.form.select')}</option>
                    <option value="予約について">
                      {t('contact.form.option.reservation')}
                    </option>
                    <option value="料金について">
                      {t('contact.form.option.price')}
                    </option>
                    <option value="設備について">
                      {t('contact.form.option.facility')}
                    </option>
                    <option value="アクセスについて">
                      {t('contact.form.option.access')}
                    </option>
                    <option value="キャンセルについて">
                      {t('contact.form.option.cancel')}
                    </option>
                    <option value="その他">
                      {t('contact.form.option.other')}
                    </option>
                  </select>
                  {errors.subject && (
                    <p className={styles.errorText}>{errors.subject.message}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    {t('contact.form.message')}{' '}
                    <span className={styles.required}>
                      {t('contact.form.required')}
                    </span>
                  </label>
                  <textarea
                    id="message"
                    className={
                      errors.message ? styles.textareaError : styles.textarea
                    }
                    rows={5}
                    placeholder={t('contact.form.placeholder.message')}
                    {...register('message', {
                      required:
                        language === 'ja'
                          ? 'お問い合わせ内容は必須です'
                          : 'Message is required',
                      minLength: {
                        value: 10,
                        message:
                          language === 'ja'
                            ? '10文字以上入力してください'
                            : 'Please enter at least 10 characters',
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
                        required:
                          language === 'ja'
                            ? 'プライバシーポリシーへの同意は必須です'
                            : 'You must agree to the privacy policy',
                      })}
                    />
                    <label htmlFor="privacy" className={styles.checkboxLabel}>
                      {t('contact.form.privacy')}
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
                  {isSubmitting
                    ? t('contact.form.submitting')
                    : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>{t('contact.faq.title')}</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>
                {language === 'ja'
                  ? 'チェックインとチェックアウトの時間は？'
                  : 'What are the check-in and check-out times?'}
              </h3>
              <p>
                {language === 'ja'
                  ? 'チェックインは15:00〜22:00、チェックアウトは11:00までとなっております。'
                  : 'Check-in is from 15:00 to 22:00, and check-out is by 11:00.'}
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>
                {language === 'ja'
                  ? '駐車場はありますか？'
                  : 'Is there parking available?'}
              </h3>
              <p>
                {language === 'ja'
                  ? '申し訳ございませんが、当施設に専用駐車場はございません。近隣のコインパーキングをご利用ください。'
                  : 'We apologize, but we do not have a dedicated parking lot. Please use nearby coin parking.'}
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>
                {language === 'ja'
                  ? 'Wi-Fiは利用できますか？'
                  : 'Is Wi-Fi available?'}
              </h3>
              <p>
                {language === 'ja'
                  ? 'はい、全館無料Wi-Fiをご利用いただけます。接続情報はチェックイン時にお知らせします。'
                  : 'Yes, free Wi-Fi is available throughout the facility. Connection information will be provided at check-in.'}
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>
                {language === 'ja'
                  ? 'キャンセル料はいつから発生しますか？'
                  : 'When does the cancellation fee apply?'}
              </h3>
              <p>
                {language === 'ja'
                  ? 'ご宿泊日の7日前からキャンセル料が発生します。詳細は予約時の規約をご確認ください。'
                  : 'Cancellation fees apply from 7 days before the stay. Please check the terms at the time of booking for details.'}
              </p>
            </div>
          </div>
          <div className={styles.moreFaq}>
            <a href="/faq" className={styles.linkButton}>
              {t('contact.faq.more')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

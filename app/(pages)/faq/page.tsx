'use client';

import { useState } from 'react';
import styles from './faq.module.css';
import { useLanguage } from '../../context/LanguageContext';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
};

const faqDataJa: FAQCategory[] = [
  {
    id: 'reservation',
    title: '予約・キャンセルについて',
    icon: '📅',
    items: [
      {
        question: '予約方法を教えてください',
        answer:
          '当サイトの予約ページから、ご希望の日程・人数を選択してご予約いただけます。お電話（090-1255-4721）でのご予約も承っております。',
      },
      {
        question: '何日前まで予約できますか？',
        answer:
          '当日予約も可能です。ただし、空室状況によりますので、お早めのご予約をおすすめしております。',
      },
      {
        question: 'キャンセル料はいつから発生しますか？',
        answer:
          'ご宿泊日の7日前から20%、3日前から50%、前日から80%、当日は100%のキャンセル料が発生します。',
      },
      {
        question: '予約の変更はできますか？',
        answer:
          '空室状況により日程変更が可能です。変更をご希望の場合は、お電話またはメールでお問い合わせください。',
      },
      {
        question: 'グループでの予約は可能ですか？',
        answer:
          'はい、可能です。5名以上のグループでのご予約は、事前にお電話でご相談ください。団体割引もございます。',
      },
    ],
  },
  {
    id: 'checkin',
    title: 'チェックイン・チェックアウトについて',
    icon: '🔑',
    items: [
      {
        question: 'チェックインとチェックアウトの時間は？',
        answer:
          'チェックインは15:00〜22:00、チェックアウトは11:00までとなっております。',
      },
      {
        question: '早めのチェックインは可能ですか？',
        answer:
          '空室状況により、アーリーチェックイン（13:00〜）が可能な場合がございます。追加料金1,000円で事前にお問い合わせください。',
      },
      {
        question: 'レイトチェックアウトは可能ですか？',
        answer:
          '空室状況により、13:00までのレイトチェックアウトが可能です。追加料金1,000円となります。事前にお問い合わせください。',
      },
      {
        question: '深夜のチェックインは可能ですか？',
        answer:
          '22:00以降のチェックインをご希望の場合は、事前にご連絡ください。可能な限り対応いたします。',
      },
    ],
  },
  {
    id: 'facility',
    title: '施設・設備について',
    icon: '🏠',
    items: [
      {
        question: 'Wi-Fiは利用できますか？',
        answer:
          'はい、全館無料Wi-Fiをご利用いただけます。接続情報はチェックイン時にお知らせします。',
      },
      {
        question: '駐車場はありますか？',
        answer:
          '申し訳ございませんが、当施設に専用駐車場はございません。近隣のコインパーキングをご利用ください。',
      },
      {
        question: 'シャワー・トイレは共用ですか？',
        answer:
          'はい、シャワールーム・トイレは共用となっております。24時間ご利用いただけます。清潔さを保つため、定期的に清掃を行っております。',
      },
      {
        question: 'キッチンは使えますか？',
        answer:
          'はい、共用キッチンをご自由にお使いいただけます。冷蔵庫、電子レンジ、調理器具、食器類を完備しております。',
      },
      {
        question: 'エアコンはありますか？',
        answer:
          'はい、全室に空調設備を完備しております。快適にお過ごしいただけます。',
      },
    ],
  },
  {
    id: 'amenity',
    title: 'アメニティ・備品について',
    icon: '🧴',
    items: [
      {
        question: 'タオルはありますか？',
        answer:
          'バスタオル・フェイスタオルを無料でご用意しております。追加タオルが必要な場合はスタッフにお申し付けください。',
      },
      {
        question: 'シャンプーやボディソープはありますか？',
        answer:
          'シャワールームにシャンプー、コンディショナー、ボディソープを備え付けております。',
      },
      {
        question: 'ドライヤーはありますか？',
        answer: 'はい、シャワールームにドライヤーをご用意しております。',
      },
      {
        question: '歯ブラシはありますか？',
        answer:
          '歯ブラシセットは有料（100円）でご用意しております。フロントでお求めください。',
      },
      {
        question: 'パジャマ・部屋着はありますか？',
        answer:
          '申し訳ございませんが、パジャマ・部屋着のご用意はございません。ご持参ください。',
      },
      {
        question: 'コンセントは使えますか？',
        answer:
          '各ベッドにコンセントと読書灯を完備しております。充電器はご持参ください。',
      },
    ],
  },
  {
    id: 'rules',
    title: '宿泊ルール・マナーについて',
    icon: '📋',
    items: [
      {
        question: '門限はありますか？',
        answer:
          '門限はございません。24時間出入り自由です。ただし、深夜の出入りは他のゲストへの配慮をお願いいたします。',
      },
      {
        question: '館内は禁煙ですか？',
        answer:
          'はい、館内は全面禁煙です。喫煙は指定の喫煙スペースでお願いいたします。',
      },
      {
        question: 'お酒の持ち込みはできますか？',
        answer:
          'はい、可能です。ただし、共用スペースでの過度な飲酒や、他のゲストへのご迷惑になる行為はお控えください。',
      },
      {
        question: '友人を部屋に呼ぶことはできますか？',
        answer:
          '宿泊者以外の方の客室への立ち入りはご遠慮いただいております。共用スペースでの面会は可能です。',
      },
      {
        question: '消灯時間はありますか？',
        answer:
          '消灯時間は設けておりませんが、22:00以降は静粛にお過ごしください。ドミトリールームでの会話はお控えください。',
      },
    ],
  },
  {
    id: 'other',
    title: 'その他',
    icon: '❓',
    items: [
      {
        question: '子供の宿泊は可能ですか？',
        answer:
          '12歳以上のお子様からご宿泊いただけます。12歳未満のお子様はご遠慮いただいております。',
      },
      {
        question: 'ペットの同伴は可能ですか？',
        answer:
          '申し訳ございませんが、ペットの同伴はお断りしております。補助犬は除きます。',
      },
      {
        question: '連泊割引はありますか？',
        answer:
          '3泊以上のご宿泊で10%割引、7泊以上で15%割引となります。予約時に自動適用されます。',
      },
      {
        question: '周辺の観光スポットを教えてください',
        answer:
          '常滑店は常滑やきもの散歩道、中部国際空港が近くにございます。犬山店は国宝犬山城、犬山城下町が徒歩圏内です。詳しくはスタッフにお尋ねください。',
      },
      {
        question: '領収書は発行できますか？',
        answer:
          'はい、チェックアウト時に発行いたします。宛名のご指定がある場合は事前にお知らせください。',
      },
    ],
  },
];

const faqDataEn: FAQCategory[] = [
  {
    id: 'reservation',
    title: 'Reservations & Cancellations',
    icon: '📅',
    items: [
      {
        question: 'How can I make a reservation?',
        answer:
          'You can make a reservation on our booking page by selecting your preferred dates and number of guests. You can also book by phone (090-1255-4721).',
      },
      {
        question: 'How far in advance can I book?',
        answer:
          'Same-day reservations are possible. However, availability may be limited, so we recommend booking early.',
      },
      {
        question: 'When do cancellation fees apply?',
        answer:
          'Cancellation fees are: 20% from 7 days before, 50% from 3 days before, 80% from the day before, and 100% on the day of stay.',
      },
      {
        question: 'Can I change my reservation?',
        answer:
          'Date changes are possible depending on availability. Please contact us by phone or email if you wish to make changes.',
      },
      {
        question: 'Can I book for a group?',
        answer:
          'Yes, you can. For groups of 5 or more, please contact us by phone in advance. Group discounts are available.',
      },
    ],
  },
  {
    id: 'checkin',
    title: 'Check-in & Check-out',
    icon: '🔑',
    items: [
      {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is from 15:00 to 22:00, and check-out is by 11:00.',
      },
      {
        question: 'Is early check-in possible?',
        answer:
          'Early check-in (from 13:00) may be available depending on room availability. Please inquire in advance. Additional fee of ¥1,000.',
      },
      {
        question: 'Is late check-out possible?',
        answer:
          'Late check-out until 13:00 is possible depending on availability. Additional fee of ¥1,000. Please inquire in advance.',
      },
      {
        question: 'Is late-night check-in possible?',
        answer:
          'If you wish to check in after 22:00, please contact us in advance. We will accommodate as much as possible.',
      },
    ],
  },
  {
    id: 'facility',
    title: 'Facilities & Equipment',
    icon: '🏠',
    items: [
      {
        question: 'Is Wi-Fi available?',
        answer:
          'Yes, free Wi-Fi is available throughout the facility. Connection information will be provided at check-in.',
      },
      {
        question: 'Is there parking available?',
        answer:
          'We apologize, but we do not have a dedicated parking lot. Please use nearby coin parking.',
      },
      {
        question: 'Are showers and toilets shared?',
        answer:
          'Yes, shower rooms and toilets are shared. They are available 24 hours. We clean them regularly to maintain cleanliness.',
      },
      {
        question: 'Can I use the kitchen?',
        answer:
          'Yes, the shared kitchen is available for free use. It is equipped with a refrigerator, microwave, cooking utensils, and tableware.',
      },
      {
        question: 'Is there air conditioning?',
        answer:
          'Yes, all rooms are equipped with air conditioning for your comfort.',
      },
    ],
  },
  {
    id: 'amenity',
    title: 'Amenities & Supplies',
    icon: '🧴',
    items: [
      {
        question: 'Are towels provided?',
        answer:
          'Bath towels and face towels are provided free of charge. Please ask staff if you need additional towels.',
      },
      {
        question: 'Is shampoo and body soap available?',
        answer:
          'Shampoo, conditioner, and body soap are provided in the shower room.',
      },
      {
        question: 'Is there a hair dryer?',
        answer: 'Yes, hair dryers are available in the shower room.',
      },
      {
        question: 'Are toothbrushes available?',
        answer:
          'Toothbrush sets are available for ¥100. Please ask at the front desk.',
      },
      {
        question: 'Are pajamas or loungewear provided?',
        answer:
          'We apologize, but pajamas and loungewear are not provided. Please bring your own.',
      },
      {
        question: 'Are there electrical outlets?',
        answer:
          'Each bed is equipped with an outlet and reading light. Please bring your own charger.',
      },
    ],
  },
  {
    id: 'rules',
    title: 'Rules & Etiquette',
    icon: '📋',
    items: [
      {
        question: 'Is there a curfew?',
        answer:
          'There is no curfew. You may come and go 24 hours. However, please be considerate of other guests when entering and leaving late at night.',
      },
      {
        question: 'Is smoking prohibited indoors?',
        answer:
          'Yes, the entire facility is non-smoking. Please smoke only in designated smoking areas.',
      },
      {
        question: 'Can I bring alcohol?',
        answer:
          'Yes, you can. However, please refrain from excessive drinking in common areas or behavior that disturbs other guests.',
      },
      {
        question: 'Can I invite friends to my room?',
        answer:
          'Non-guests are not allowed in guest rooms. Meetings in common areas are permitted.',
      },
      {
        question: 'Is there a lights-out time?',
        answer:
          'There is no set lights-out time, but please be quiet after 22:00. Please refrain from talking in dormitory rooms.',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    icon: '❓',
    items: [
      {
        question: 'Can children stay?',
        answer:
          'Guests aged 12 and over are welcome. Children under 12 are not permitted.',
      },
      {
        question: 'Are pets allowed?',
        answer:
          'We apologize, but pets are not allowed. Service animals are an exception.',
      },
      {
        question: 'Are there discounts for extended stays?',
        answer:
          '10% discount for stays of 3 nights or more, 15% discount for 7 nights or more. Automatically applied at booking.',
      },
      {
        question: 'What tourist spots are nearby?',
        answer:
          'Tokoname location is near Tokoname Pottery Path and Chubu Centrair International Airport. Inuyama location has National Treasure Inuyama Castle and castle town within walking distance.',
      },
      {
        question: 'Can I get a receipt?',
        answer:
          'Yes, receipts are issued at check-out. Please let us know in advance if you need a specific name on the receipt.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('reservation');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const { t, language } = useLanguage();

  const faqData = language === 'ja' ? faqDataJa : faqDataEn;

  const toggleItem = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  const isItemOpen = (categoryId: string, index: number) => {
    return openItems.has(`${categoryId}-${index}`);
  };

  return (
    <div className={styles.faqPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{t('faq.title')}</h1>
          <p>{t('faq.subtitle')}</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* カテゴリータブ */}
        <div className={styles.categoryTabs}>
          {faqData.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryTab} ${activeCategory === category.id ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryTitle}>{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQ内容 */}
        <div className={styles.faqContent}>
          {faqData.map((category) => (
            <div
              key={category.id}
              className={`${styles.categorySection} ${activeCategory === category.id ? styles.activeSection : ''}`}
            >
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>{category.icon}</span>
                {category.title}
              </h2>

              <div className={styles.faqList}>
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${isItemOpen(category.id, index) ? styles.faqItemOpen : ''}`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleItem(category.id, index)}
                      aria-expanded={isItemOpen(category.id, index)}
                    >
                      <span className={styles.questionText}>
                        {item.question}
                      </span>
                      <span className={styles.toggleIcon}>
                        {isItemOpen(category.id, index) ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`${styles.faqAnswer} ${isItemOpen(category.id, index) ? styles.faqAnswerOpen : ''}`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせへのリンク */}
        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h3>{t('faq.contact.title')}</h3>
            <p>{t('faq.contact.message')}</p>
            <div className={styles.contactButtons}>
              <a href="/contact" className={styles.primaryButton}>
                {t('faq.contact.form')}
              </a>
              <a href="tel:090-1255-4721" className={styles.secondaryButton}>
                📞 090-1255-4721
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

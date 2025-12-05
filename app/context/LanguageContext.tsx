'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Language = 'ja' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 翻訳データ
const translations: Record<Language, Record<string, string>> = {
  ja: {
    // ヘッダー
    'nav.home': 'ホーム',
    'nav.booking': '宿泊予約',
    'nav.contact': 'お問い合わせ',
    'nav.faq': 'よくある質問',
    'nav.login': 'ログイン',
    'nav.signup': '新規登録',
    'nav.account': 'アカウント',

    // ホームページ
    'home.hero.text1': '古きを生かし、',
    'home.hero.text2': '未来を創る。',
    'home.dormitory.title': 'ドミトリーとは',
    'home.dormitory.feature1.title': '相部屋の宿泊施設',
    'home.dormitory.feature1.desc':
      'ドミトリーは、知らない人同士が同じ部屋で寝泊まりし交流のできる相部屋の宿泊施設です。',
    'home.dormitory.feature2.title': 'プライバシーと交流',
    'home.dormitory.feature2.desc':
      'ご自身のプライベートを守りながらも、他の旅行者との交流ができる絶妙なバランスの空間です。',
    'home.dormitory.feature3.title': '特別な体験',
    'home.dormitory.feature3.desc':
      'ドミトリーならではの少し変わった寝泊りを楽しめる、旅の新しい形の体験ができます。',
    'home.facilities.title': '設備内容',
    'home.facilities.common': '共有スペース',
    'home.facilities.common.desc':
      '他の旅行者との交流を楽しめる開放的な空間です。',
    'home.facilities.kitchen': 'キッチン',
    'home.facilities.kitchen.desc':
      '自炊可能な設備が整ったキッチンを完備しています。',
    'home.facilities.bedroom': 'ベッドルーム',
    'home.facilities.bedroom.desc':
      '快適な睡眠環境を提供するベッドスペースです。',
    'home.facilities.locker': 'ロッカー',
    'home.facilities.locker.desc':
      '貴重品を安全に保管できるセキュリティロッカーです。',
    'home.facilities.bathroom': 'バスルーム',
    'home.facilities.bathroom.desc':
      '清潔で使いやすいバスルームを完備しています。',
    'home.facilities.toilet': 'トイレ',
    'home.facilities.toilet.desc': '清潔なトイレを常に維持しています。',
    'home.access.title': 'アクセス',
    'home.access.intro':
      'ドミトリー真志は常滑市と犬山市に拠点を構えています。それぞれの店舗が持つ独自の魅力をぜひお楽しみください。',
    'home.access.tokoname': '常滑店',
    'home.access.inuyama': '犬山店',
    'home.access.tokoname.title': '🏠 水に浮く家 — 常滑店',
    'home.access.tokoname.desc':
      '常滑店の最大の特徴は、まるで空中に浮いているかのような建築です。池の上に建てられたこの宿泊施設は、日常を忘れさせてくれる特別な空間をお届けします。常滑焼の里で、浮遊感あふれる非日常体験をお楽しみください。',
    'home.access.inuyama.title': '🏯 和洋折衷の美 — 犬山店',
    'home.access.inuyama.desc':
      '犬山店は、日本の伝統美と西洋のモダンなデザインが融合した和洋折衷の建築が特徴です。国宝犬山城のお膝元で、日本の歴史と西洋の洗練された空間が調和した独自の雰囲気をお楽しみいただけます。城下町の風情と現代的な快適さを兼ね備えた、唯一無二の滞在体験をお届けします。',
    'home.access.address': '住所',
    'home.access.station': '最寄り駅',
    'home.access.phone': '電話番号',
    'home.access.email': 'メールアドレス',

    // お問い合わせページ
    'contact.title': 'お問い合わせ',
    'contact.subtitle':
      'ドミトリー真志に関するお問い合わせはこちらから。お気軽にご連絡ください。',
    'contact.card.title': 'お気軽にお問い合わせください',
    'contact.card.desc':
      'ドミトリー真志についてのご質問、ご不明点などがございましたら、こちらのフォームからお問い合わせください。24時間以内にスタッフよりご返信いたします。',
    'contact.phone': 'お電話',
    'contact.phone.hours': '受付時間: 平日 9:00〜18:00',
    'contact.email': 'メール',
    'contact.address': '住所',
    'contact.form.title': 'お問い合わせフォーム',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.phone': '電話番号',
    'contact.form.subject': '件名',
    'contact.form.message': 'お問い合わせ内容',
    'contact.form.privacy': 'プライバシーポリシーに同意する',
    'contact.form.submit': '送信する',
    'contact.form.required': '必須',
    'contact.form.optional': '任意',
    'contact.thankyou.title': 'お問い合わせありがとうございます',
    'contact.thankyou.message':
      '内容を確認次第、担当者よりご連絡いたします。通常は24時間以内にご返信いたします。',
    'contact.thankyou.new': '新しいお問い合わせ',
    'contact.form.select': '選択してください',
    'contact.form.option.reservation': '予約について',
    'contact.form.option.price': '料金について',
    'contact.form.option.facility': '設備について',
    'contact.form.option.access': 'アクセスについて',
    'contact.form.option.cancel': 'キャンセルについて',
    'contact.form.option.other': 'その他',
    'contact.form.placeholder.name': '山田 太郎',
    'contact.form.placeholder.email': 'example@email.com',
    'contact.form.placeholder.phone': '03-1234-5678',
    'contact.form.placeholder.message': 'お問い合わせ内容を入力してください',
    'contact.form.submitting': '送信中...',
    'contact.faq.title': 'よくある質問',
    'contact.faq.more': 'その他のよくある質問',

    // FAQページ
    'faq.title': 'よくある質問',
    'faq.subtitle': 'よくあるご質問をまとめました。',
    'faq.category.reservation': '予約・キャンセルについて',
    'faq.category.checkin': 'チェックイン・チェックアウトについて',
    'faq.category.facility': '施設・設備について',
    'faq.category.amenity': 'アメニティ・備品について',
    'faq.category.rules': '宿泊ルール・マナーについて',
    'faq.category.other': 'その他',
    'faq.contact.title': 'お探しの回答が見つかりませんか？',
    'faq.contact.message':
      'その他ご不明な点がございましたら、お気軽にお問い合わせください。',
    'faq.contact.form': 'お問い合わせフォーム',

    // 予約ページ
    'booking.title': '宿泊予約',
    'booking.subtitle': 'ご希望の日程・人数を選択して予約を進めてください。',

    // ログインページ
    'login.title': 'ログイン',
    'login.email': 'メールアドレス',
    'login.password': 'パスワード',
    'login.submit': 'ログイン',
    'login.forgot': 'パスワードをお忘れですか？',
    'login.signup': 'アカウントをお持ちでない方',
    'login.signup.link': '新規登録',

    // フッター
    'footer.copyright': '© 2024 ドミトリー真志 All Rights Reserved.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.booking': 'Booking',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.account': 'Account',

    // Homepage
    'home.hero.text1': 'Reviving the past,',
    'home.hero.text2': 'Creating the future.',
    'home.dormitory.title': 'What is a Dormitory?',
    'home.dormitory.feature1.title': 'Shared Accommodation',
    'home.dormitory.feature1.desc':
      'A dormitory is a shared accommodation where strangers can stay and interact in the same room.',
    'home.dormitory.feature2.title': 'Privacy & Interaction',
    'home.dormitory.feature2.desc':
      'A perfect balance of space where you can protect your privacy while interacting with other travelers.',
    'home.dormitory.feature3.title': 'Special Experience',
    'home.dormitory.feature3.desc':
      'Experience a new form of travel with unique accommodation only found in dormitories.',
    'home.facilities.title': 'Facilities',
    'home.facilities.common': 'Common Space',
    'home.facilities.common.desc':
      'An open space where you can enjoy interacting with other travelers.',
    'home.facilities.kitchen': 'Kitchen',
    'home.facilities.kitchen.desc': 'Fully equipped kitchen for self-catering.',
    'home.facilities.bedroom': 'Bedroom',
    'home.facilities.bedroom.desc': 'Comfortable bed spaces for quality sleep.',
    'home.facilities.locker': 'Locker',
    'home.facilities.locker.desc':
      'Security lockers to safely store your valuables.',
    'home.facilities.bathroom': 'Bathroom',
    'home.facilities.bathroom.desc':
      'Clean and easy-to-use bathroom facilities.',
    'home.facilities.toilet': 'Toilet',
    'home.facilities.toilet.desc': 'Always maintained in a clean condition.',
    'home.access.title': 'Access',
    'home.access.intro':
      'Dormitory Masashi has locations in Tokoname and Inuyama. Enjoy the unique charm of each store.',
    'home.access.tokoname': 'Tokoname',
    'home.access.inuyama': 'Inuyama',
    'home.access.tokoname.title': '🏠 Floating House — Tokoname',
    'home.access.tokoname.desc':
      'The main feature of our Tokoname location is the architecture that appears to float in the air. Built over a pond, this accommodation offers a special space that helps you forget everyday life. Enjoy an extraordinary experience with a floating sensation in the home of Tokoname pottery.',
    'home.access.inuyama.title': '🏯 Japanese-Western Fusion — Inuyama',
    'home.access.inuyama.desc':
      'Our Inuyama location features Japanese-Western fusion architecture that blends traditional Japanese beauty with modern Western design. At the foot of the National Treasure Inuyama Castle, enjoy the unique atmosphere where Japanese history harmonizes with refined Western space.',
    'home.access.address': 'Address',
    'home.access.station': 'Nearest Station',
    'home.access.phone': 'Phone',
    'home.access.email': 'Email',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle':
      'For inquiries about Dormitory Masashi, please contact us here.',
    'contact.card.title': 'Feel free to contact us',
    'contact.card.desc':
      'If you have any questions about Dormitory Masashi, please contact us through this form. Our staff will reply within 24 hours.',
    'contact.phone': 'Phone',
    'contact.phone.hours': 'Hours: Weekdays 9:00-18:00',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.form.title': 'Contact Form',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.privacy': 'I agree to the Privacy Policy',
    'contact.form.submit': 'Submit',
    'contact.form.required': 'Required',
    'contact.form.optional': 'Optional',
    'contact.thankyou.title': 'Thank you for your inquiry',
    'contact.thankyou.message':
      'We will reply within 24 hours after reviewing your message.',
    'contact.thankyou.new': 'New Inquiry',
    'contact.form.select': 'Please select',
    'contact.form.option.reservation': 'About Reservations',
    'contact.form.option.price': 'About Pricing',
    'contact.form.option.facility': 'About Facilities',
    'contact.form.option.access': 'About Access',
    'contact.form.option.cancel': 'About Cancellation',
    'contact.form.option.other': 'Other',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'example@email.com',
    'contact.form.placeholder.phone': '090-1234-5678',
    'contact.form.placeholder.message': 'Please enter your inquiry',
    'contact.form.submitting': 'Submitting...',
    'contact.faq.title': 'FAQ',
    'contact.faq.more': 'More FAQ',

    // FAQ page
    'faq.title': 'FAQ',
    'faq.subtitle': 'Frequently asked questions.',
    'faq.category.reservation': 'Reservations & Cancellations',
    'faq.category.checkin': 'Check-in & Check-out',
    'faq.category.facility': 'Facilities & Equipment',
    'faq.category.amenity': 'Amenities & Supplies',
    'faq.category.rules': 'Rules & Etiquette',
    'faq.category.other': 'Other',
    'faq.contact.title': "Can't find what you're looking for?",
    'faq.contact.message':
      'If you have any other questions, please feel free to contact us.',
    'faq.contact.form': 'Contact Form',

    // Booking page
    'booking.title': 'Booking',
    'booking.subtitle':
      'Select your preferred dates and number of guests to proceed with your reservation.',

    // Login page
    'login.title': 'Login',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.forgot': 'Forgot your password?',
    'login.signup': "Don't have an account?",
    'login.signup.link': 'Sign Up',

    // Footer
    'footer.copyright': '© 2024 Dormitory Masashi All Rights Reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  useEffect(() => {
    // ローカルストレージから言語設定を読み込み
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

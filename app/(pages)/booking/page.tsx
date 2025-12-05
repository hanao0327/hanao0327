'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useLanguage } from '../../context/LanguageContext';
// import { motion } from 'framer-motion'; // 使用しないためコメントアウト

// 仮のデータ（修正）
type Reservation = { name: string; profile: string };
type MockData = {
  [dormitory: string]: {
    [date: string]: {
      reservations: Reservation[];
    };
  };
};

// 各ドミトリーの予約データ - 修正版
const mockData: MockData = {
  dormitory1: {
    '2025-06-19': {
      reservations: [
        { name: '山田 太郎', profile: 'https://via.placeholder.com/50' },
        { name: '佐藤 健', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-20': {
      reservations: [
        { name: '田中 一郎', profile: 'https://via.placeholder.com/50' },
        { name: '鈴木 大輔', profile: 'https://via.placeholder.com/50' },
        { name: '高橋 優', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-21': {
      reservations: [
        { name: '伊藤 誠', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-22': {
      reservations: [
        { name: '渡辺 剛', profile: 'https://via.placeholder.com/50' },
        { name: '加藤 隆', profile: 'https://via.placeholder.com/50' },
        { name: '小林 和也', profile: 'https://via.placeholder.com/50' },
        { name: '吉田 拓也', profile: 'https://via.placeholder.com/50' },
        { name: '山本 浩', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-23': {
      reservations: [
        { name: '中村 孝', profile: 'https://via.placeholder.com/50' },
        { name: '斎藤 健太', profile: 'https://via.placeholder.com/50' },
        { name: '橋本 直樹', profile: 'https://via.placeholder.com/50' },
        { name: '松本 勇', profile: 'https://via.placeholder.com/50' },
        { name: '井上 智', profile: 'https://via.placeholder.com/50' },
        { name: '木村 大輔', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-24': {
      reservations: [],
    },
    '2025-06-25': {
      reservations: [
        { name: '林 隆太', profile: 'https://via.placeholder.com/50' },
        { name: '清水 誠', profile: 'https://via.placeholder.com/50' },
        { name: '山崎 裕太', profile: 'https://via.placeholder.com/50' },
        { name: '森 健太郎', profile: 'https://via.placeholder.com/50' },
      ],
    },
  },
  dormitory2: {
    '2025-06-19': {
      reservations: [
        { name: '佐々木 美咲', profile: 'https://via.placeholder.com/50' },
        { name: '山田 優子', profile: 'https://via.placeholder.com/50' },
        { name: '鈴木 さくら', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-20': {
      reservations: [
        { name: '高橋 真由美', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-21': {
      reservations: [
        { name: '田中 愛', profile: 'https://via.placeholder.com/50' },
        { name: '伊藤 舞', profile: 'https://via.placeholder.com/50' },
        { name: '渡辺 彩香', profile: 'https://via.placeholder.com/50' },
        { name: '加藤 優花', profile: 'https://via.placeholder.com/50' },
        { name: '小林 麻衣', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-22': {
      reservations: [
        { name: '吉田 恵', profile: 'https://via.placeholder.com/50' },
        { name: '山本 明美', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-23': {
      reservations: [],
    },
    '2025-06-24': {
      reservations: [
        { name: '中村 友美', profile: 'https://via.placeholder.com/50' },
        { name: '斎藤 美穂', profile: 'https://via.placeholder.com/50' },
        { name: '橋本 花子', profile: 'https://via.placeholder.com/50' },
        { name: '松本 さやか', profile: 'https://via.placeholder.com/50' },
        { name: '井上 美咲', profile: 'https://via.placeholder.com/50' },
        { name: '木村 真理', profile: 'https://via.placeholder.com/50' },
      ],
    },
    '2025-06-25': {
      reservations: [
        { name: '林 千夏', profile: 'https://via.placeholder.com/50' },
        { name: '清水 美香', profile: 'https://via.placeholder.com/50' },
      ],
    },
  },
};

type DormitoryId = 'dormitory1' | 'dormitory2';

export default function BookingPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [selectedDormitory, setSelectedDormitory] =
    useState<DormitoryId>('dormitory1');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availability, setAvailability] = useState<string | null>(null);
  const [reservations, setReservations] = useState<
    { name: string; profile: string }[]
  >([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // ドミトリー情報
  const dormitoryInfo: Record<
    DormitoryId,
    {
      name: string;
      capacity: number;
      image: string;
      description: string;
    }
  > = {
    dormitory1: {
      name: language === 'ja' ? '常滑ドミトリー' : 'Tokoname Dormitory',
      capacity: 6,
      image: '/images/dormitory-male.jpg',
      description:
        language === 'ja'
          ? '常滑ドミトリー説明。最大６人'
          : 'Tokoname Dormitory. Max 6 guests',
    },
    dormitory2: {
      name: language === 'ja' ? '犬山ドミトリー' : 'Inuyama Dormitory',
      capacity: 6,
      image: '/images/dormitory-female.jpg',
      description:
        language === 'ja'
          ? '犬山ドミトリー説明。最大6人'
          : 'Inuyama Dormitory. Max 6 guests',
    },
  };

  // calculateAvailability関数を修正
  const calculateAvailability = (reservationsCount: number) => {
    const capacity = dormitoryInfo[selectedDormitory].capacity;

    if (reservationsCount <= 1) return '◎'; // 0-1人の場合
    if (reservationsCount <= 3) return '〇'; // 2-3人の場合
    if (reservationsCount <= 5) return '△'; // 4-5人の場合
    return '×'; // 6人（満室）の場合
  };

  const getAvailabilityColor = (symbol: string) => {
    switch (symbol) {
      case '◎':
        return 'bg-green-100 text-green-800';
      case '〇':
        return 'bg-blue-100 text-blue-800';
      case '△':
        return 'bg-yellow-100 text-yellow-800';
      case '×':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  const handleDormitoryChange = (dormitoryId: string) => {
    setSelectedDormitory(dormitoryId as DormitoryId);
    setSelectedDate(null);
    setAvailability(null);
    setReservations([]);
  };

  const handleDateClick = (date: string) => {
    const data = mockData[selectedDormitory]?.[date] || { reservations: [] };
    const availability = calculateAvailability(data.reservations.length);

    setSelectedDate(date);
    setAvailability(availability);
    setReservations(data.reservations);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null); // 空白の日付
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${currentMonth.getFullYear()}-${String(
        currentMonth.getMonth() + 1
      ).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push(date);
    }
    return days;
  };

  const handleReservation = () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      router.push('/reservation');
    }
  };

  // 曜日によって色を変える関数
  const getDayOfWeekClass = (dayIndex: number) => {
    if (dayIndex === 0) return 'text-red-500'; // 日曜
    if (dayIndex === 6) return 'text-blue-500'; // 土曜
    return 'text-gray-700'; // 平日
  };

  return (
    <div className={styles.bookingContainer}>
      {/* 予約ページヘッダー */}
      <div className={styles.bookingHeader}>
        <h1 className={styles.bookingTitle}>{t('booking.title')}</h1>
        <p className={styles.bookingSubtitle}>{t('booking.subtitle')}</p>
      </div>

      {/* ドミトリー選択 */}
      <div className={styles.dormitorySelector}>
        {Object.keys(dormitoryInfo).map((dormId) => (
          <div
            key={dormId}
            className={`${styles.dormitoryCard} ${selectedDormitory === dormId ? styles.selectedDormitory : ''}`}
            onClick={() => handleDormitoryChange(dormId)}
          >
            <div className={styles.dormitoryImageContainer}>
              <img
                src={dormitoryInfo[dormId as DormitoryId].image}
                alt={dormitoryInfo[dormId as DormitoryId].name}
                className={styles.dormitoryImage}
              />
            </div>
            <div className={styles.dormitoryInfo}>
              <h3 className={styles.dormitoryName}>
                {dormitoryInfo[dormId as DormitoryId].name}
              </h3>
              <p className={styles.dormitoryCapacity}>
                {language === 'ja' ? '定員' : 'Capacity'}:{' '}
                {dormitoryInfo[dormId as DormitoryId].capacity}
                {language === 'ja' ? '名' : ' guests'}
              </p>
              <p className={styles.dormitoryDescription}>
                {dormitoryInfo[dormId as DormitoryId].description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bookingContent}>
        {/* カレンダーセクション */}
        <div className={styles.calendarSection}>
          <div className={styles.calendarHeader}>
            <h2 className={styles.sectionTitle}>
              {language === 'ja'
                ? `${dormitoryInfo[selectedDormitory].name}の空き状況カレンダー`
                : `${dormitoryInfo[selectedDormitory].name} Availability Calendar`}
            </h2>
            <div className={styles.monthSelector}>
              <button onClick={handlePrevMonth} className={styles.monthButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className={styles.currentMonth}>
                {language === 'ja'
                  ? `${currentMonth.getFullYear()}年 ${currentMonth.getMonth() + 1}月`
                  : `${currentMonth.toLocaleString('en', { month: 'long' })} ${currentMonth.getFullYear()}`}
              </span>
              <button onClick={handleNextMonth} className={styles.monthButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.calendarGrid}>
            {(language === 'ja'
              ? ['日', '月', '火', '水', '木', '金', '土']
              : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            ).map((day, index) => (
              <div
                key={day}
                className={`${styles.calendarDayHeader} ${getDayOfWeekClass(index)}`}
              >
                {day}
              </div>
            ))}

            {generateCalendarDays().map((date, index) =>
              date ? (
                <button
                  key={index}
                  className={`${styles.calendarDay} ${date === selectedDate ? styles.selectedDay : ''}`}
                  onClick={() => handleDateClick(date)}
                >
                  <span className={styles.dateNumber}>
                    {new Date(date).getDate()}
                  </span>
                  <span
                    className={`${styles.availabilityBadge} ${getAvailabilityColor(calculateAvailability(mockData[selectedDormitory]?.[date]?.reservations?.length || 0))}`}
                  >
                    {calculateAvailability(
                      mockData[selectedDormitory]?.[date]?.reservations
                        ?.length || 0
                    )}
                  </span>
                </button>
              ) : (
                <div key={index} className={styles.emptyDay}></div>
              )
            )}
          </div>

          {/* 凡例 */}
          <div className={styles.legend}>
            <h3 className={styles.legendTitle}>
              {language === 'ja' ? '空き状況の見方' : 'Availability Guide'}
            </h3>
            <div className={styles.legendItems}>
              <div className={styles.legendItem}>
                <span
                  className={`${styles.legendBadge} bg-green-100 text-green-800`}
                >
                  ◎
                </span>
                <span>
                  {language === 'ja'
                    ? '空きあり (0~1人)'
                    : 'Available (0-1 guests)'}
                </span>
              </div>
              <div className={styles.legendItem}>
                <span
                  className={`${styles.legendBadge} bg-blue-100 text-blue-800`}
                >
                  〇
                </span>
                <span>
                  {language === 'ja'
                    ? '少し空きあり (2~3人)'
                    : 'Some availability (2-3 guests)'}
                </span>
              </div>
              <div className={styles.legendItem}>
                <span
                  className={`${styles.legendBadge} bg-yellow-100 text-yellow-800`}
                >
                  △
                </span>
                <span>
                  {language === 'ja'
                    ? '残りわずか (4~5人)'
                    : 'Limited (4-5 guests)'}
                </span>
              </div>
              <div className={styles.legendItem}>
                <span
                  className={`${styles.legendBadge} bg-red-100 text-red-800`}
                >
                  ×
                </span>
                <span>
                  {language === 'ja' ? '空きなし (6人)' : 'Full (6 guests)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 予約詳細セクション */}
        <div className={styles.detailsSection}>
          {selectedDate ? (
            <div className={styles.dateDetails}>
              <div className={styles.dateHeader}>
                <h2 className={styles.selectedDateTitle}>
                  {dormitoryInfo[selectedDormitory].name}
                  <br />
                  {language === 'ja'
                    ? `${new Date(selectedDate).getFullYear()}年${new Date(selectedDate).getMonth() + 1}月${new Date(selectedDate).getDate()}日の予約状況`
                    : `Reservations for ${new Date(selectedDate).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })}`}
                </h2>
                <span
                  className={`${styles.availabilityTag} ${getAvailabilityColor(availability || '')}`}
                >
                  {availability}
                </span>
              </div>

              <div className={styles.reservationInfo}>
                <div className={styles.infoCard}>
                  <div className={styles.infoCardHeader}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <h3 className={styles.infoCardTitle}>
                      {language === 'ja' ? '予約者数' : 'Guests'}
                    </h3>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardValue}>
                      {reservations.length}
                    </span>
                    <span className={styles.infoCardUnit}>
                      {language === 'ja' ? '人' : ''}
                    </span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoCardHeader}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className={styles.infoCardTitle}>
                      {language === 'ja' ? '残り' : 'Available'}
                    </h3>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardValue}>
                      {dormitoryInfo[selectedDormitory].capacity -
                        reservations.length}
                    </span>
                    <span className={styles.infoCardUnit}>
                      {language === 'ja' ? 'ベッド' : ' beds'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 予約者一覧 */}
              <div className={styles.guestList}>
                <h3 className={styles.guestListTitle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {language === 'ja' ? '予約者一覧' : 'Guest List'}
                </h3>
                {reservations.length > 0 ? (
                  <div className={styles.guestCards}>
                    {reservations.map((person, index) => (
                      <div key={index} className={styles.guestCard}>
                        <img
                          src={person.profile}
                          alt={person.name}
                          className={styles.guestAvatar}
                        />
                        <span className={styles.guestName}>{person.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className={styles.emptyMessage}>
                    {language === 'ja'
                      ? '予約者はいません。最初の予約者になりませんか？'
                      : 'No reservations yet. Be the first to book!'}
                  </p>
                )}
              </div>

              <button
                onClick={handleReservation}
                className={styles.reservationButton}
              >
                {language === 'ja' ? 'この日に予約する' : 'Book this date'}
              </button>
            </div>
          ) : (
            <div className={styles.emptyDetails}>
              <div className={styles.emptyDetailsIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className={styles.emptyDetailsTitle}>
                {language === 'ja'
                  ? '日付を選択してください'
                  : 'Please select a date'}
              </h2>
              <p className={styles.emptyDetailsText}>
                {language === 'ja'
                  ? `カレンダーから日付を選択すると、${dormitoryInfo[selectedDormitory].name}の予約状況が表示されます`
                  : `Select a date from the calendar to view ${dormitoryInfo[selectedDormitory].name} availability`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

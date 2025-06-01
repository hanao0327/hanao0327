'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ルーターを使用してリダイレクト
import styles from './page.module.css';

// 仮のデータをコンポーネント外部に移動
const mockData = {
  '2025-06-01': {
    reservations: [
      { name: '山田 太郎', profile: 'https://via.placeholder.com/50' },
      { name: '佐藤 花子', profile: 'https://via.placeholder.com/50' },
    ],
  },
  '2025-06-02': {
    reservations: [
      { name: '田中 一郎', profile: 'https://via.placeholder.com/50' },
    ],
  },
  '2025-06-03': { reservations: [] },
  '2025-06-04': {
    reservations: [
      { name: '山田 太郎', profile: 'https://via.placeholder.com/50' },
      { name: '佐藤 花子', profile: 'https://via.placeholder.com/50' },
      { name: '田中 一郎', profile: 'https://via.placeholder.com/50' },
      { name: '鈴木 次郎', profile: 'https://via.placeholder.com/50' },
      { name: '高橋 花子', profile: 'https://via.placeholder.com/50' },
      { name: '伊藤 太郎', profile: 'https://via.placeholder.com/50' },
    ],
  },
};

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availability, setAvailability] = useState<string | null>(null);
  const [reservations, setReservations] = useState<
    { name: string; profile: string }[]
  >([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const router = useRouter(); // ルーターを初期化

  const calculateAvailability = (reservationsCount: number) => {
    if (reservationsCount === 0) return '◎';
    if (reservationsCount < 2) return '〇';
    if (reservationsCount < 4) return '△';
    return '×';
  };

  const handleDateClick = (date: string) => {
    const data = mockData[date] || { reservations: [] };
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
    const isLoggedIn = false; // 仮のログイン状態（実際には認証ロジックを追加）

    if (!isLoggedIn) {
      router.push('/login'); // ログインページにリダイレクト
    } else {
      router.push('/reservation'); // 予約ページにリダイレクト
    }
  };

  return (
    <div className={`${styles.container} flex`}>
      {/* カレンダー */}
      <div className="w-1/2">
        <h1 className={styles.heading}>宿泊予約</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">空き状況カレンダー</h2>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrevMonth}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              前の月
            </button>
            <span className="text-lg font-bold">
              {currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月
            </span>
            <button
              onClick={handleNextMonth}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              次の月
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
              <div key={day} className="text-center font-bold">
                {day}
              </div>
            ))}
            {generateCalendarDays().map((date, index) =>
              date ? (
                <button
                  key={index}
                  className="border rounded p-2 text-center"
                  onClick={() => handleDateClick(date)}
                >
                  {new Date(date).getDate()}
                  <br />
                  {calculateAvailability(
                    mockData[date]?.reservations?.length || 0
                  )}
                </button>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </section>

        {/* 記号の意味 */}
        <div className="mt-4">
          <ul className="list-disc list-inside text-sm">
            <li>◎: 空きあり（予約者0人）</li>
            <li>〇: 少し空きあり（予約者1～2人）</li>
            <li>△: 残りわずか（予約者3～4人）</li>
            <li>×: 空きなし（予約者5～6人）</li>
          </ul>
        </div>

        <button
          onClick={handleReservation}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
        >
          予約する
        </button>
      </div>

      {/* 選択した日の詳細 */}
      <div className="w-1/2 pl-8">
        {selectedDate ? (
          <section>
            <h2 className="text-2xl font-bold mb-4">{selectedDate}の詳細</h2>
            <p>空き状況: {availability}</p>
            <p>予約人数: {reservations.length}人</p>
            <h3 className="text-xl font-semibold mt-4">予約者一覧</h3>
            {reservations.length > 0 ? (
              <ul className="list-disc list-inside">
                {reservations.map((person, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      src={person.profile}
                      alt={person.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{person.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>予約者はいません。</p>
            )}
          </section>
        ) : (
          <p className="text-gray-500">日付を選択してください。</p>
        )}
      </div>
    </div>
  );
}

// 現在の日付を取得してカレンダーを表示
function renderCalendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // 月の1日を取得し、その月の最初の日が何曜日かを取得
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // カレンダー表示のための配列作成
  const days = [];
  
  // 月初めの前に空白の日を追加
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push('');
  }

  // 現在月の日付を追加
  for (let i = 1; i <= lastDateOfMonth; i++) {
    days.push(i);
  }

  // カレンダーを表示
  const calendarElement = document.getElementById('calendar');
  calendarElement.innerHTML = '';

  // 日曜日〜土曜日の曜日を表示
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
  dayNames.forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.classList.add('day');
    dayHeader.textContent = day;
    calendarElement.appendChild(dayHeader);
  });

  // 各日付を表示
  days.forEach((day, index) => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');

    if (day !== '') {
      dayElement.textContent = day;

      // 今日の日付にクラスを追加
      const today = new Date();
      if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
        dayElement.classList.add('current-day');
      }
    }
    
    calendarElement.appendChild(dayElement);
  });

  // 現在の日付を表示
  document.getElementById('current-date').textContent = `${currentYear}年 ${currentMonth + 1}月`;
}

// 初期ロード時にカレンダーを描画
renderCalendar();

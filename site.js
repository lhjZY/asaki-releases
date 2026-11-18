// Language: the visitor's last choice, else Chinese for a Chinese browser and English otherwise.
// The year: drawn from today's date, the way the app's header draws it.
(function () {
  'use strict';

  const root = document.documentElement;
  const stored = localStorage.getItem('asaki-language');
  const setLanguage = language => {
    root.dataset.lang = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    describeToday();
  };

  // 36 periods of ten days from January 1; the days left over close the year as tidy-up days.
  const now = new Date();
  const year = now.getFullYear();
  const dayOfYear = Math.round((Date.UTC(year, now.getMonth(), now.getDate()) - Date.UTC(year, 0, 1)) / 86400000);
  const period = Math.min(Math.floor(dayOfYear / 10) + 1, 37);
  const dayInPeriod = dayOfYear - (period - 1) * 10 + 1;
  const isTidyUp = period === 37;

  function ticks(container) {
    for (let n = 1; n <= 37; n++) {
      const tick = document.createElement('i');
      tick.className = [n === 37 ? 'tidy' : '', n < period ? 'past' : n === period ? 'now' : ''].join(' ').trim();
      container.append(tick);
    }
  }

  function describeToday() {
    const chinese = root.dataset.lang === 'zh';
    const position = isTidyUp
      ? (chinese ? '整理日' : 'Tidy-up days')
      : (chinese ? `第 ${period} 个十天，共 36 个` : `Period ${period} of 36`);
    const today = isTidyUp
      ? (chinese ? `今天是整理日的第 ${dayInPeriod} 天` : `Today is day ${dayInPeriod} of the tidy-up days`)
      : (chinese ? `今天是第 ${period} 个十天的第 ${dayInPeriod} 天` : `Today is day ${dayInPeriod} of period ${period}`);
    document.querySelectorAll('[data-year-number]').forEach(el => { el.textContent = year; });
    document.querySelectorAll('[data-year-position]').forEach(el => { el.textContent = position; });
    document.querySelectorAll('[data-today]').forEach(el => { el.textContent = today; });
  }

  document.querySelectorAll('[data-year], [data-periods]').forEach(ticks);
  setLanguage(stored || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'));

  document.getElementById('language').addEventListener('click', () => {
    const next = root.dataset.lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('asaki-language', next);
    setLanguage(next);
  });
})();

import { Category, StudyLog } from '@prisma/client';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { bookmarkIcon, gameIcon, headphonesIcon, speechIcon, watchIcon } from './icons';
import { StudyStat } from './types';

export function getIconForCategory(category: Category) {
  switch (category) {
    case 'Speaking':
      return speechIcon;
    case 'Listening':
      return headphonesIcon;
    case 'Playing':
      return gameIcon;
    case 'Watching':
      return watchIcon;
    case 'Reading':
      return bookmarkIcon;
    default:
      return '•';
  }
}

export function buildTimeArray(entry: StudyStat) {
  return entry.value;
}

export function getColorForChart(category: Category) {
  switch (category) {
    case 'Speaking':
      return 'rgb(36, 123, 160)';
    case 'Listening':
      return 'rgb(82, 72, 156)';
    case 'Playing':
      return 'rgb(117, 142, 79)';
    case 'Watching':
      return 'rgb(241, 154, 62)';
    case 'Reading':
      return 'rgb(206, 109, 139)';
    default:
      return 'red-500';
  }
}

export function sumArray(array: number[]) {
  let sum = array.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  }, 0);
  return sum;
}

export function toHoursAndMinutesJapanese(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) {
    if (minutes > 0) {
      return `${hours}時間 ${minutes}分`;
    } else return `${hours}時間`;
  }
  return `${minutes}分`;
}

export function getTimeForCategory(category: Category, logs: StudyLog[]) {
  if (!logs) {
    return 0;
  } else {
    const filteredArray = logs.filter((log) => log.category === category);
    const time = sumArray(filteredArray.map((activity) => activity.time));
    return time;
  }
}

export function formatJapaneseDate(date: string) {
  return format(parseISO(date), 'MMM do', { locale: ja });
}

export function formatJapaneseDateWithDay(date: string) {
  return format(parseISO(date), 'EE', { locale: ja });
}

export function getJapaneseNameforCategory(category: Category | 'Total') {
  switch (category) {
    case 'Speaking':
      return '話す';
    case 'Listening':
      return '聴く';
    case 'Playing':
      return 'ゲーム';
    case 'Watching':
      return '観る';
    case 'Reading':
      return '読書';
    case 'Total':
      return '全部';
    default:
      return 'エラー';
  }
}

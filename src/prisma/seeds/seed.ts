import { Category, Status } from '@prisma/client';

export const studyLogs = [
  {
    title: 'Ep.073',
    category: Category.Listening,
    date: '2024-02-17',
    time: 29,
    resourceId: 1,
    userId: 1,
  },
  {
    title: '[Japanese conversation] Talk to the staff at a cafe. Chiba Vlog',
    category: Category.Listening,
    date: '2024-02-17',
    time: 13,
    resourceId: 2,
    userId: 1,
  },
  {
    title: '第０話, read 10 pages',
    category: Category.Reading,
    date: '2024-02-17',
    time: 10,
    resourceId: 3,
    userId: 1,
  },
  {
    title: 'Episode 40',
    category: Category.Watching,
    date: '2024-02-17',
    time: 20,
    resourceId: 4,
    userId: 1,
  },
  {
    title: 'Lesson with Aoi',
    category: Category.Speaking,
    date: '2024-02-17',
    time: 30,
    resourceId: 5,
    userId: 1,
  },
];

export const resources = [
  {
    id: 1,
    name: 'Not Straight! 〜クィアな2人の井戸端会議〜',
    category: Category.Listening,
    status: Status.Current,
    link: '',
    notes: 'Queer content for the win!',
    userId: 1,
  },
  {
    id: 2,
    name: 'あかね的日本語教室',
    category: Category.Listening,
    status: Status.Current,
    link: 'https://www.youtube.com/@Akane-JapaneseClass',
    notes: 'Excellent listening practice.',
    userId: 1,
  },
  {
    id: 3,
    name: '僕らの食卓',
    category: Category.Reading,
    status: Status.Current,
    link: 'https://myanimelist.net/manga/104491/Bokura_no_Shokutaku',
    notes: 'No furigana.',
    userId: 1,
  },
  {
    id: 4,
    name: '呪術廻戦 2',
    category: Category.Watching,
    status: Status.Current,
    link: 'https://myanimelist.net/anime/51009/Jujutsu_Kaisen_2nd_Season',
    notes: 'Difficult language, but great show.',
    userId: 1,
  },
  {
    id: 5,
    name: 'iTalki',
    category: Category.Speaking,
    status: Status.Current,
    link: 'https://www.italki.com/',
    notes: 'Great website for speaking practice.',
    userId: 1,
  },
];

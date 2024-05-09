import { getStudiesForDate } from '@/lib/data';
import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Notepad from './Notepad';
import NotepadStudyItem from './NotepadStudyItem';
import Window from './Window';

const getData = async (today: string) => {
  const data = await getStudiesForDate(today);
  return data;
};

type TodayStudiesProps = {
  today: string;
};

const TodaysStudies = async ({ today }: TodayStudiesProps) => {
  const studyLogs = await getData(today);
  const todayJapanese = format(new UTCDate(today), 'EE MMM do', { locale: ja });

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
        <span className='border-b-2 border-black'>{todayJapanese}</span>
        <div className='pt-2'>
          {studyLogs.map((log) => (
            <NotepadStudyItem key={log.id} log={log} />
          ))}
          <span>• | </span>
        </div>
      </Notepad>
    </Window>
  );
};

export default TodaysStudies;

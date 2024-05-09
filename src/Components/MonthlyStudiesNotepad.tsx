import { StudyLog } from '@prisma/client';
import Notepad from './Notepad';
import NotepadStudyItem from './NotepadStudyItem';
import Window from './Window';

type MonthlyStudiesProps = { data: StudyLog[]; year: string; monthJapanese: string; monthEnglish: string };

const MonthlyStudies = async ({ data, year, monthJapanese, monthEnglish }: MonthlyStudiesProps) => {
  return (
    <Window English={`Study Logs for ${monthEnglish}`} Japanese={`${year}年${monthJapanese}のログ`}>
      <Notepad>
        <div>
          {data.map((log) => (
            <NotepadStudyItem key={log.id} log={log} />
          ))}
          <span>• | </span>
        </div>
      </Notepad>
    </Window>
  );
};

export default MonthlyStudies;

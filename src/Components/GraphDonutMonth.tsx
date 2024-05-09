import { StudyStat } from '@/lib/types';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

type GraphDonutMonthProps = { data: StudyStat[]; year: string; monthJapanese: string; monthEnglish: string };

const GraphDonutMonth = async ({ data, year, monthJapanese, monthEnglish }: GraphDonutMonthProps) => {
  return (
    <>
      <Window English={`Study Time for ${monthEnglish}`} Japanese={`${year}年${monthJapanese}の勉強時間`}>
        <GraphDonutWithStats stats={data} />
      </Window>
    </>
  );
};

export default GraphDonutMonth;

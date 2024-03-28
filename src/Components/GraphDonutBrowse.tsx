import { countStudyLogsForCategory } from '@/lib/data';
import { StudyLogCount } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';
import DonutChart from './GraphDonut';
import Window from './Window';

const getData = async () => {
  const studyLogCount: StudyLogCount[] = [
    { category: 'Listening', value: await countStudyLogsForCategory('Listening') },
    { category: 'Playing', value: await countStudyLogsForCategory('Playing') },
    { category: 'Watching', value: await countStudyLogsForCategory('Watching') },
    { category: 'Speaking', value: await countStudyLogsForCategory('Speaking') },
    { category: 'Reading', value: await countStudyLogsForCategory('Reading') },
  ];
  return studyLogCount;
};

const GraphDonutBrowse = async () => {
  const data = await getData();
  const filteredCount = data.filter((d) => d.value !== 0);
  const sortedCount = filteredCount.sort((a, b) => {
    return b.value - a.value;
  });

  return (
    <Window English='Study Log Count' Japanese='ログ・カウント'>
      <div className='flex flex-row gap-4 py-2 items-center justify-around p-4 border-2 bg-dark-gray bg-opacity-10 border-dark-gray'>
        <DonutChart displayType='Number' width={150} height={150} data={sortedCount} donutThickness={30} />
        <div className='flex flex-col'>
          {sortedCount.map((data) => (
            <div className='grid grid-cols-2 pb-2 items-center gap-2' key={data.category}>
              <span className='col-start-1 pr-2 shrink-0'>{getIconForCategory(data.category)}</span>
              <span className='col-start-2'>{data.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default GraphDonutBrowse;

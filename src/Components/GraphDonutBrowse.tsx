import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';

import { getStudiesForDate } from '@/lib/data';
import Window from './Window';

const getData = async (category: string) => {
  const logs = await getStudiesForDate(category);
  const stats: StudyStat[] = [
    { category: 'Listening', time: getTimeForCategory('Listening', logs) },
    { category: 'Playing', time: getTimeForCategory('Playing', logs) },
    { category: 'Watching', time: getTimeForCategory('Watching', logs) },
    { category: 'Speaking', time: getTimeForCategory('Speaking', logs) },
    { category: 'Reading', time: getTimeForCategory('Reading', logs) },
  ];
  return stats;
};

type GraphDonutBrowseProps = { category: string };

const GraphDonutBrowse = async () => {
  // const data = await getData(category);

  return (
    <Window English='' Japanese='勉強時間'>
      GraphDonut for
    </Window>
  );
};

export default GraphDonutBrowse;

import {
  getTotalListeningTime,
  getTotalPlayingTime,
  getTotalReadingTime,
  getTotalSpeakingTime,
  getTotalStudyTime,
  getTotalWatchingTime,
} from '@/lib/data';
import { getJapaneseNameforCategory, toHoursAndMinutes } from '@/lib/utils';
import { Category } from '@prisma/client';
import Window from './Window';

const getData = async () => {
  const times: { category: Category | 'Total'; time: number }[] = [
    { category: 'Total', time: await getTotalStudyTime() },
    { category: 'Listening', time: await getTotalListeningTime() },
    { category: 'Reading', time: await getTotalReadingTime() },
    { category: 'Speaking', time: await getTotalSpeakingTime() },
    { category: 'Playing', time: await getTotalPlayingTime() },
    { category: 'Watching', time: await getTotalWatchingTime() },
  ];

  return times;
};

async function TotalStudyTimeStats() {
  const times = await getData();
  const filteredTimes = times.filter((d) => d.time !== 0);

  return (
    <div className='flex flex-row gap-2 flex-wrap flex-shrink-0'>
      {filteredTimes.map((d) => (
        <div key={d.category} className='w-36'>
          <Window English={d.category} Japanese={getJapaneseNameforCategory(d.category)} category={d.category}>
            <div className='text-center'>{toHoursAndMinutes(d.time)}</div>
          </Window>
        </div>
      ))}
    </div>
  );
}

export default TotalStudyTimeStats;

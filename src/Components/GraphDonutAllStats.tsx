import {
  getTotalListeningTime,
  getTotalPlayingTime,
  getTotalReadingTime,
  getTotalSpeakingTime,
  getTotalWatchingTime,
} from '@/lib/data';
import { StudyStat } from '@/lib/types';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

const getData = async () => {
  const times: StudyStat[] = [
    { category: 'Listening', time: await getTotalListeningTime() },
    { category: 'Reading', time: await getTotalReadingTime() },
    { category: 'Speaking', time: await getTotalSpeakingTime() },
    { category: 'Playing', time: await getTotalPlayingTime() },
    { category: 'Watching', time: await getTotalWatchingTime() },
  ];
  return times;
};

async function GraphDonutAllStats() {
  const times = await getData();
  return (
    <Window English='All Study Time' Japanese='全部勉強時間'>
      <GraphDonutWithStats stats={times} />
    </Window>
  );
}

export default GraphDonutAllStats;

import {
  countResources,
  countStudyLogs,
  getTotalListeningTime,
  getTotalPlayingTime,
  getTotalReadingTime,
  getTotalSpeakingTime,
  getTotalStudyTime,
  getTotalWatchingTime,
} from '@/lib/data';
import { toHoursAndMinutesJapanese } from '@/lib/utils';
import Window from './Window';

async function ProfileStats() {
  const totalStudyTime = await getTotalStudyTime();
  const totalResourceCount = await countResources();
  const totalStudyLogCount = await countStudyLogs();
  const totalListening = await getTotalListeningTime();
  const totalReading = await getTotalReadingTime();
  const totalSpeaking = await getTotalSpeakingTime();
  const totalPlaying = await getTotalPlayingTime();
  const totalWatching = await getTotalWatchingTime();
  return (
    <Window English='Stats' Japanese='統計'>
      <div className='p-4 border-2 border-dark-gray flex flex-col gap-2'>
        <span>Study Time: {toHoursAndMinutesJapanese(totalStudyTime)}</span>
        <span>Resources: {totalResourceCount}</span>
        <span>Study Logs: {totalStudyLogCount}</span>
        <span>Listening: {toHoursAndMinutesJapanese(totalListening)}</span>
        <span>Reading: {toHoursAndMinutesJapanese(totalReading)}</span>
        <span>Watching: {toHoursAndMinutesJapanese(totalWatching)}</span>
        <span>Speaking: {toHoursAndMinutesJapanese(totalSpeaking)}</span>
        <span>Playing: {toHoursAndMinutesJapanese(totalPlaying)}</span>
      </div>
    </Window>
  );
}

export default ProfileStats;

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
import Notepad from './Notepad';
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
      <Notepad>
        <div className='flex flex-col gap-1'>
          <span>• Total Study Time: {toHoursAndMinutesJapanese(totalStudyTime)}</span>
          <span>• Resources: {totalResourceCount}</span>
          <span>• Study Logs: {totalStudyLogCount}</span>
          <span>• Listening: {toHoursAndMinutesJapanese(totalListening)}</span>
          <span>• Reading: {toHoursAndMinutesJapanese(totalReading)}</span>
          <span>• Watching: {toHoursAndMinutesJapanese(totalWatching)}</span>
          <span>• Speaking: {toHoursAndMinutesJapanese(totalSpeaking)}</span>
          <span>• Playing: {toHoursAndMinutesJapanese(totalPlaying)}</span>
        </div>
      </Notepad>
    </Window>
  );
}

export default ProfileStats;

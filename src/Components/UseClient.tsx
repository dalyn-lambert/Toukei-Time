'use client';

import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import TodaysStudies from './TodaysStudies';
import Window from './Window';

const UseClient = () => {
  const newDate = new UTCDate().toISOString();
  const today = format(newDate, 'yyyy-MM-dd');

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <TodaysStudies date={today} />
    </Window>
  );
};

export default UseClient;

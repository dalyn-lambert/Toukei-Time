'use client';

import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import TodaysStudies from './TodaysStudies';
import Window from './Window';

const UseClient = () => {
  const newDate = new UTCDate().toISOString();
  console.log(`new date ${newDate}`);
  const today = format(newDate, 'yyyy-MM-dd');
  console.log(`today ${today}`);

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <TodaysStudies date={today} />
    </Window>
  );
};

export default UseClient;

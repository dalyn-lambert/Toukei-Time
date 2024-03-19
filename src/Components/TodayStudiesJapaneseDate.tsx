'use client';

import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const TodaysStudiesDate = () => {
  const today = format(new UTCDate().toISOString(), 'yyyy-MM-dd');
  console.log(today);

  const todayJapanese = format(today, 'EE MMM do', { locale: ja });

  return <span className='border-b-2 border-black'>{todayJapanese}</span>;
};

export default TodaysStudiesDate;

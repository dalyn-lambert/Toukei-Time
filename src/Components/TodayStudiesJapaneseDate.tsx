'use client';

import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const TodaysStudiesDate = () => {
  const today = new Date();
  const todayJapanese = format(today, 'EE MMM do', { locale: ja });

  return <span className='border-b-2 border-black'>{todayJapanese}</span>;
};

export default TodaysStudiesDate;

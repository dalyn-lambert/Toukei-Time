import { formatDate } from 'date-fns';

export const ClientStudyLogDate = (timestamp: Date) => {
  'use client';
  return <span>{formatDate(new Date(timestamp), 'yyyy-MM-dd')}</span>;
};

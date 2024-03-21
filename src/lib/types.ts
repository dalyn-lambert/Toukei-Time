import { Category, Resource } from '@prisma/client';
import { ReactNode } from 'react';

export type WindowProps = { children?: ReactNode } & WindowTitleProps;
export type WindowTitleProps = { English: string; Japanese: string; category?: Category | 'Total' };
export type NotepadProps = { children?: ReactNode };
export type StudyStat = { category: Category; time: number };
export type ResourceWithTotalTime = { totalTime?: string } & Resource;
export interface StudyDay {
  date: string;
  Speaking: number;
  Listening: number;
  Reading: number;
  Playing: number;
  Watching: number;
}

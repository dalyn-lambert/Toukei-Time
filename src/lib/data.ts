import { User } from '@prisma/client';
import { format, formatISO } from 'date-fns';
import prisma from './prisma';

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const getAllStudyLogs = async () => {
  const logs = await prisma.studyLog.findMany({ orderBy: { date: 'desc' } });
  return logs;
};

export const getTodaysStudies = async () => {
  const today = formatISO(new Date());
  const formattedToday = format(today, 'yyyy-MM-dd');
  const logs = await prisma.studyLog.findMany({ where: { date: `${formattedToday}T00:00:00.000Z` } });
  return logs;
};

export const getStudyLogFromId = async (id: number) => {
  const studyLog = await prisma.studyLog.findFirst({
    where: {
      id,
    },
  });
  return studyLog;
};

export const getAllResources = async () => {
  const resources = await prisma.resource.findMany({ orderBy: { dateAdded: 'desc' } });
  return resources;
};

export const getResourceFromId = async (id: number) => {
  const resource = await prisma.resource.findFirst({
    where: {
      id,
    },
  });
  return resource;
};

export const getResourceFromTitle = async (name: string) => {
  const resource = await prisma.resource.findFirst({
    where: {
      name,
    },
  });
  return resource;
};

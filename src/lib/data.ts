import { auth } from '@/auth';
import { UTCDate } from '@date-fns/utc';
import { User } from '@prisma/client';
import { format, subDays } from 'date-fns';
import prisma from './prisma';

export async function getUserWithEmail(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUser() {
  const session = await auth();
  if (!session?.user?.email) {
    return null;
  }
  const user = await getUserWithEmail(session.user.email);
  if (!user) {
    return null;
  }

  return user;
}

export const getAllStudyLogs = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve all study logs, user not found');
  }
  const logs = await prisma.studyLog.findMany({ where: { userId: user.id }, orderBy: { date: 'desc' } });
  return logs;
};

export const getTodaysStudies = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error("Could not retrieve today's studies, user not found");
  }
  const today = new UTCDate();
  const formattedToday = format(today, 'yyyy-MM-dd');
  const logs = await prisma.studyLog.findMany({ where: { userId: user.id, date: `${formattedToday}T00:00:00.000Z` } });
  return logs;
};

export const getStudiesBetweenDates = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve studies, user not found');
  }
  const today = new UTCDate();
  const end = format(today, 'yyyy-MM-dd');
  const start = subDays(end, 7);
  const logs = await prisma.studyLog.findMany();
  return logs;
};

export const getStudyLogFromId = async (id: number) => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const studyLog = await prisma.studyLog.findFirst({
    where: {
      userId: user.id,
      id,
    },
  });
  return studyLog;
};

export const getAllResources = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve resources, user not found');
  }
  const resources = await prisma.resource.findMany({ where: { userId: user.id }, orderBy: { dateAdded: 'desc' } });
  return resources;
};

export const getResourceFromId = async (id: number) => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve resource, user not found');
  }
  const resource = await prisma.resource.findFirst({
    where: {
      userId: user.id,
      id,
    },
  });
  return resource;
};

export const getResourceFromTitle = async (name: string) => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve resource, user not found');
  }
  const resource = await prisma.resource.findFirst({
    where: {
      userId: user.id,
      name,
    },
  });
  return resource;
};

export const getStudyLogForResource = async (id: number) => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const studyLog = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      resourceId: id,
    },
  });
  return studyLog;
};

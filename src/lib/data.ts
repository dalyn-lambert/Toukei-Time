import { auth } from '@/auth';
import { Category, User } from '@prisma/client';
import prisma from './prisma';
import { sumArray, toHoursAndMinutesJapanese } from './utils';

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

export const getStudiesForDate = async (date: string) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Could not retrieve today's studies, user not found");
  }
  const logs = await prisma.studyLog.findMany({ where: { userId: user.id, date: date } });
  return logs;
};

export const getStudyDayForDate = async (date: string) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Could not retrieve today's studies, user not found");
  }
  const listeningTimes = await prisma.studyLog.findMany({
    where: { userId: user.id, date: date, category: 'Listening' },
    select: { time: true },
  });
  const Listening = sumArray(listeningTimes.map((d) => d.time));

  const readingTimes = await prisma.studyLog.findMany({
    where: { userId: user.id, date: date, category: 'Reading' },
    select: { time: true },
  });
  const Reading = sumArray(readingTimes.map((d) => d.time));

  const watchingTimes = await prisma.studyLog.findMany({
    where: { userId: user.id, date: date, category: 'Watching' },
    select: { time: true },
  });
  const Watching = sumArray(watchingTimes.map((d) => d.time));

  const playingTime = await prisma.studyLog.findMany({
    where: { userId: user.id, date: date, category: 'Playing' },
    select: { time: true },
  });
  const Playing = sumArray(playingTime.map((d) => d.time));

  const speakingTime = await prisma.studyLog.findMany({
    where: { userId: user.id, date: date, category: 'Speaking' },
    select: { time: true },
  });
  const Speaking = sumArray(speakingTime.map((d) => d.time));

  return { date, Listening, Reading, Watching, Playing, Speaking };
};

export const getStudiesBetweenDates = async (start: string, end: string) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Could not retrieve today's studies, user not found");
  }
  const logs = await prisma.studyLog.findMany({
    where: { userId: user.id, date: { lte: end, gte: start } },
    select: { date: true, category: true, time: true },
    orderBy: { date: 'asc' },
  });

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
  const resources = await prisma.resource.findMany({
    where: { userId: user.id },
    orderBy: [{ name: 'asc' }],
  });

  return resources;
};

export const countResources = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve resources, user not found');
  }
  const count = await prisma.resource.count({
    where: { userId: user.id },
    select: { _all: true },
  });
  return count._all;
};

export async function getTotalTimeForResource(resourceId: number) {
  const allLogs = await getStudyLogsForResource(resourceId);
  const times = allLogs.map((log) => log.time);
  const total = sumArray(times);
  return toHoursAndMinutesJapanese(total);
}

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

export const getResourceForCategory = async (category: Category) => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve resource, user not found');
  }
  const resource = await prisma.resource.findMany({
    where: {
      userId: user.id,
      category,
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

export const getStudyLogsForResource = async (id: number) => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const studyLog = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      resourceId: id,
    },
    orderBy: {
      date: 'desc',
    },
  });
  return studyLog;
};

export const countStudyLogs = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study logs, user not found');
  }
  const count = await prisma.studyLog.count({
    where: { userId: user.id },
    select: { _all: true },
  });
  return count._all;
};

export const getTotalStudyTime = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const times = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
    },
    select: { time: true },
  });
  const timeArray = times.map((time) => time.time);
  const totalTime = sumArray(timeArray);
  return totalTime;
};

export const getTotalListeningTime = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const times = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      category: 'Listening',
    },
    select: { time: true },
  });
  const timeArray = times.map((time) => time.time);
  const totalTime = sumArray(timeArray);
  return totalTime;
};

export const getTotalReadingTime = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const times = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      category: 'Reading',
    },
    select: { time: true },
  });
  const timeArray = times.map((time) => time.time);
  const totalTime = sumArray(timeArray);
  return totalTime;
};

export const getTotalSpeakingTime = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const times = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      category: 'Speaking',
    },
    select: { time: true },
  });
  const timeArray = times.map((time) => time.time);
  const totalTime = sumArray(timeArray);
  return totalTime;
};

export const getTotalPlayingTime = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const times = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      category: 'Playing',
    },
    select: { time: true },
  });
  const timeArray = times.map((time) => time.time);
  const totalTime = sumArray(timeArray);
  return totalTime;
};

export const getTotalWatchingTime = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error('Could not retrieve study log, user not found');
  }
  const times = await prisma.studyLog.findMany({
    where: {
      userId: user.id,
      category: 'Watching',
    },
    select: { time: true },
  });
  const timeArray = times.map((time) => time.time);
  const totalTime = sumArray(timeArray);
  return totalTime;
};

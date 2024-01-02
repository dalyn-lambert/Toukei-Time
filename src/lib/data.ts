import { User } from '@prisma/client';
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
  const logs = await prisma.studyLog.findMany();
  return logs;
};

export const getAllResources = async () => {
  const resources = await prisma.resource.findMany({orderBy: {}});
  return resources;
};

export const getResourceFromId = async (id: number) => {
  const resource = await prisma.resource.findFirst({
    where: {
      id: id,
    },
  });
  return resource;
};

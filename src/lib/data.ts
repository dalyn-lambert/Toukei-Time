import prisma from './prisma';

export const getAllStudyLogs = async () => {
  const logs = await prisma.studyLog.findMany();
  return logs;
};

export const getAllResources = async () => {
  const resources = await prisma.resource.findMany();
  return resources;
};

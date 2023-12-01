import prisma from './prisma';

export const getAllStudyLogs = async () => {
  const logs = await prisma.studyLog.findMany();
  return logs;
};

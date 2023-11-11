import prisma from './prisma';

export const getAllStudyLogs = async () => {
  return await prisma.studyLog.findMany();
};

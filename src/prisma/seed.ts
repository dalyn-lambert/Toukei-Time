import { PrismaClient } from '@prisma/client';
import { studyLogs } from './seeds/studyLogs';
const prisma = new PrismaClient();

async function main() {
  await prisma.studyLog.deleteMany();
  console.log('Deleted records in Study Log table');

  await prisma.studyLog.createMany({
    data: studyLogs,
  });

  console.log('Added Study Log data');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

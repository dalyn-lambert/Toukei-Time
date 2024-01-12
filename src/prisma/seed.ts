import { PrismaClient } from '@prisma/client';
import { resources, studyLogs } from './seeds/seed';
const prisma = new PrismaClient();

async function main() {
  await prisma.studyLog.deleteMany();
  console.log('Deleted records in Study Log table');

  await prisma.resource.deleteMany();
  console.log('Deleted records in Resource table');

  await prisma.user.deleteMany();
  console.log('Deleted records in user table');

  await prisma.user.create({
    data: {
      id: 2500,
      username: 'Cinder',
      email: 'dalyn.boyd@gmail.com',

      password: 'password',
    },
  });

  console.log('Added User data');

  await prisma.resource.createMany({
    data: resources,
  });

  console.log('Added Resource data');

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

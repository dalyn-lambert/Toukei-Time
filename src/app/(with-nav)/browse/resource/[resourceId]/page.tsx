import Notepad from '@/Components/Notepad';
import ResourceHeader from '@/Components/ResourceHeader';
import StudyLogEntry from '@/Components/StudyLogEntry';
import Window from '@/Components/Window';
import { getResourceFromId, getStudyLogsForResource, getTotalTimeForResource } from '@/lib/data';
import { ResourceWithTotalTime } from '@/lib/types';
import { StudyLog } from '@prisma/client';
import { notFound } from 'next/navigation';

const getResource = async (id: number) => {
  const data = await getResourceFromId(id);
  return data;
};

const addTotalTime = async (resource: ResourceWithTotalTime) => {
  const totalTime = await getTotalTimeForResource(resource.id);
  resource.totalTime = totalTime;
  return resource;
};

const getStudyLogs = async (id: number) => {
  const data = await getStudyLogsForResource(id);
  return data;
};

export default async function ResourcePage({ params }: { params: { resourceId: string } }) {
  const id = Number(params.resourceId);
  const resource = await getResource(id);
  if (!resource) {
    notFound();
  }
  const resourceWithTotalTime = await addTotalTime(resource);
  const studyLogs: StudyLog[] = await getStudyLogs(id);

  return (
    <div className='flex flex-col gap-4'>
      <ResourceHeader resource={resourceWithTotalTime} />
      <Window English='All Study Logs for Resource' Japanese='全部のローグ' category={resource.category}>
        <Notepad>
          <div className='flex flex-col gap-4'>
            {studyLogs.map((studyLog) => (
              <StudyLogEntry key={studyLog.id} {...studyLog} />
            ))}
          </div>
        </Notepad>
      </Window>
    </div>
  );
}

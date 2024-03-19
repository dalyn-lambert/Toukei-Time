import { DeleteResource } from '@/Components/DeleteResource';
import Notepad from '@/Components/Notepad';
import StudyLogEntry from '@/Components/StudyLogEntry';
import UpdateResource from '@/Components/UpdateResource';
import Window from '@/Components/Window';
import { getResourceFromId, getStudyLogsForResource } from '@/lib/data';
import { notFound } from 'next/navigation';

const getResource = async (id: number) => {
  const data = await getResourceFromId(id);
  return data;
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
  const studyLogs = await getStudyLogs(id);

  return (
    <div className='flex flex-col gap-4'>
      <UpdateResource {...resource} />
      <Window English='All Study Logs for Resource' Japanese='全部のローグ' category={resource.category}>
        <Notepad>
          <div className='flex flex-col gap-4'>
            {studyLogs.map((studyLog) => (
              <StudyLogEntry key={studyLog.id} {...studyLog} />
            ))}
          </div>
        </Notepad>
      </Window>
      <DeleteResource id={resource.id} />
    </div>
  );
}

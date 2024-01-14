import { DeleteStudyLog } from '@/Components/DeleteStudyLog';
import UpdateStudyLog from '@/Components/UpdateStudyLog';
import Window from '@/Components/Window';
import { getStudyLogFromId } from '@/lib/data';
import { notFound } from 'next/navigation';

const getData = async (id: number) => {
  const data = await getStudyLogFromId(id);
  return data;
};

export default async function StudyLogPage({ params }: { params: { studyLogId: string } }) {
  const id = Number(params.studyLogId);
  const data = await getData(id);
  if (!data) {
    notFound();
  }
  return (
    <div className='flex flex-col gap-4'>
      <UpdateStudyLog {...data} />
      <Window English='some graph' Japanese='some graph'>
        Some graph or something
      </Window>
      <DeleteStudyLog id={data.id} />
    </div>
  );
}

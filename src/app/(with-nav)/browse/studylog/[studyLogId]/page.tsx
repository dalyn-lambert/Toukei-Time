import { DeleteStudyLog } from '@/Components/DeleteStudyLog';
import UpdateStudyLog from '@/Components/UpdateStudyLog';
import { getAllResources, getStudyLogFromId } from '@/lib/data';
import { notFound } from 'next/navigation';

const getData = async (id: number) => {
  const data = await getStudyLogFromId(id);
  return data;
};

const getResources = async () => {
  const data = await getAllResources();
  return data;
};

export default async function StudyLogPage({ params }: { params: { studyLogId: string } }) {
  const id = Number(params.studyLogId);
  const allResources = await getResources();
  const data = await getData(id);
  if (!data) {
    notFound();
  }
  return (
    <div className='flex flex-col gap-4'>
      <DeleteStudyLog id={data.id} />
      <UpdateStudyLog log={data} resources={allResources} />
    </div>
  );
}

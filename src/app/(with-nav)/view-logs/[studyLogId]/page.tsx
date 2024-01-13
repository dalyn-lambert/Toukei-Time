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
      {/* update study log */}
      <Window English='some graph' Japanese='some graph'>
        Some graph or something
      </Window>
      {/* delete study log */}
    </div>
  );
}

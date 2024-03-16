import { getAllResources, getStudyLogFromId } from '@/lib/data';

const getData = async (id: number) => {
  const data = await getStudyLogFromId(id);
  return data;
};

const getResources = async () => {
  const data = await getAllResources();
  return data;
};

export default async function StudyLogPage({ params }: { params: { studyLogId: string } }) {
  // const id = Number(params.studyLogId);
  // const allResources = await getResources();
  // const data = await getData(id);
  // if (!data) {
  //   notFound();
  // }
  return (
    <div className='flex flex-col gap-4'>
      This is the page for a study log
      {/* <UpdateStudyLog log={data} resources={allResources} />
      <DeleteStudyLog id={data.id} /> */}
    </div>
  );
}

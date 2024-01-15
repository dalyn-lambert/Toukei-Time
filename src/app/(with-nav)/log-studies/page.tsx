import AddStudyLog from '@/Components/AddStudyLog';
import { getAllResources } from '@/lib/data';
const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function LogStudiesPage() {
  const allResources = await getData();

  return (
    <div className='flex flex-col gap-4'>
      <AddStudyLog resources={allResources} />
    </div>
  );
}

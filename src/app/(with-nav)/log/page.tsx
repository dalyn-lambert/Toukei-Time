import AddWindow from '@/Components/AddWindow';
import TotalStudyTimeStats from '@/Components/GraphDonutAllStats';
import { getAllResources } from '@/lib/data';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function AddPage() {
  const allResources = await getData();

  return (
    <div className='flex flex-col gap-4'>
      <AddWindow resources={allResources} />
      <TotalStudyTimeStats />
    </div>
  );
}

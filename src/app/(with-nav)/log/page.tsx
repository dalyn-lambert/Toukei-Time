import AddWindow from '@/Components/AddWindow';
import TotalStudyTimeStats from '@/Components/GraphDonutAllStats';
import { getCurrentResources } from '@/lib/data';

const getData = async () => {
  const data = await getCurrentResources();
  return data;
};

export default async function AddPage() {
  const currentResources = await getData();

  return (
    <div className='flex flex-col gap-4'>
      <AddWindow resources={currentResources} />
      <TotalStudyTimeStats />
    </div>
  );
}

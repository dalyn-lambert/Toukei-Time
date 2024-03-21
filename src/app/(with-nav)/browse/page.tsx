import BrowseWindow from '@/Components/BrowseWindow';
import { getAllResources, getTotalTimeForResource } from '@/lib/data';
import { ResourceWithTotalTime } from '@/lib/types';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

const addTotalTime = async (resources: ResourceWithTotalTime[]) => {
  for (let i in resources) {
    const totalTime = await getTotalTimeForResource(resources[i].id);
    resources[i].totalTime = totalTime;
  }
  return resources as ResourceWithTotalTime[];
};

export default async function BrowsePage() {
  const resources = await getData();
  const resourcesWithTotalTime = await addTotalTime(resources);
  return (
    <div className='flex flex-col gap-4'>
      <BrowseWindow resources={resourcesWithTotalTime} />
    </div>
  );
}

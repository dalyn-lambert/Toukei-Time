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
  return resources;
};

export default async function BrowsePage() {
  const resources = await getData();
  const resourcesWithTotalTime = await addTotalTime(resources);
  return <BrowseWindow resources={resourcesWithTotalTime} />;
}

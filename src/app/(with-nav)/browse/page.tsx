import ResourceEntry from '@/Components/ResourceEntry';
import { getAllResources } from '@/lib/data';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function BrowsePage() {
  const resources = await getData();

  return (
    <div className='flex flex-col gap-4'>
      {resources.map((resource) => (
        <ResourceEntry key={resource.id} {...resource} />
      ))}
    </div>
  );
}

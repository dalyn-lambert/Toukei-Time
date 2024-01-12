import Window from '@/Components/Window';
import { getAllResources } from '@/lib/data';
import Link from 'next/link';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function ViewAllResourcesPage() {
  const resources = await getData();

  return (
    <div className='flex flex-col gap-4'>
      {resources.map((resource) => (
        <Link href={`/view-resources/${resource.id}`} key={resource.id}>
          <Window English={resource.category} Japanese={resource.category} category={resource.category}>
            {resource.name}
          </Window>
        </Link>
      ))}
    </div>
  );
}

import Notepad from '@/Components/Notepad';
import ResourceEntry from '@/Components/ResourceEntry';
import Window from '@/Components/Window';
import { getAllResources } from '@/lib/data';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function BrowsePage() {
  const resources = await getData();

  return (
    <Window English='' Japanese=''>
      <Notepad>
        <div className='flex flex-col gap-4'>
          {resources.map((resource) => (
            <ResourceEntry key={resource.id} {...resource} />
          ))}
        </div>
      </Notepad>
    </Window>
  );
}

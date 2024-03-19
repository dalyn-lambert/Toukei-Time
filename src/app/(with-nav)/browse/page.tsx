import BrowseExplorer from '@/Components/BrowseExplorer';
import { getAllResources } from '@/lib/data';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function BrowsePage() {
  const resources = await getData();
  return (
    <div className='flex flex-col gap-4'>
      <BrowseExplorer resources={resources} />
    </div>
  );
}

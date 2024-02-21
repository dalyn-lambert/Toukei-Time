import BrowseExplorer from '@/Components/BrowseExplorer';
import { getAllResources } from '@/lib/data';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

export default async function BrowsePage() {
  const resources = await getData();

  return <BrowseExplorer resources={resources} />;
}

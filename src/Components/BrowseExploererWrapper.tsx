'use server';

import { getAllResources } from '@/lib/data';
import BrowseExplorer from './BrowseExplorer';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

async function BrowseExplorerWrapper() {
  const resources = await getData();

  return <BrowseExplorer resources={resources} />;
}

export default BrowseExplorerWrapper;

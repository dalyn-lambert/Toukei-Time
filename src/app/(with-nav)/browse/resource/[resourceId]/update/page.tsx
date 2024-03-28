import { DeleteResource } from '@/Components/DeleteResource';
import UpdateResource from '@/Components/UpdateResource';
import { getResourceFromId } from '@/lib/data';
import { notFound } from 'next/navigation';

const getResource = async (id: number) => {
  const data = await getResourceFromId(id);
  return data;
};

export default async function UpdateResourcePage({ params }: { params: { resourceId: string } }) {
  const id = Number(params.resourceId);
  const resource = await getResource(id);
  if (!resource) {
    notFound();
  }

  return (
    <div className='flex flex-col gap-4'>
      <DeleteResource id={resource.id} />
      <UpdateResource {...resource} />
    </div>
  );
}

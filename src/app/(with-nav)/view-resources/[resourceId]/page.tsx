import { DeleteResource } from '@/Components/DeleteResource';
import UpdateResource from '@/Components/UpdateResource';
import { getResourceFromId } from '@/lib/data';
import { notFound } from 'next/navigation';

const getData = async (id: number) => {
  const data = await getResourceFromId(id);
  return data;
};

export default async function ResourcePage({ params }: { params: { resourceId: string } }) {
  const id = Number(params.resourceId);
  const data = await getData(id);
  if (!data) {
    notFound();
  }
  return (
    <div className='flex flex-col gap-4'>
      <UpdateResource {...data} />
      <DeleteResource id={data.id} />
    </div>
  );
}

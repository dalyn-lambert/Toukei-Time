import UpdateResource from '@/Components/UpdateResource';
import { getResourceFromId } from '@/lib/data';
import { redirect } from 'next/navigation';

const getData = async (id: number) => {
  const data = await getResourceFromId(id);
  return data;
};

export default async function ResourcePage({ params }: { params: { resourceId: string } }) {
  const id = Number(params.resourceId);
  const data = await getData(id);
  if (!data) {
    redirect(`/view-resources`);
  }
  return (
    <>
      <UpdateResource {...data} />
      <div>Some graph or something</div>
    </>
  );
}

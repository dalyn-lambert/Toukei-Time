import StyledButton from '@/Components/StyledButton';
import UpdateResource from '@/Components/UpdateResource';
import Window from '@/Components/Window';
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
    <div className='flex flex-col gap-4'>
      <UpdateResource {...data} />
      <Window English='some graph' Japanese='some graph'>
        Some graph or something
      </Window>
      <StyledButton label='Delete Resource' type='Danger' />
    </div>
  );
}

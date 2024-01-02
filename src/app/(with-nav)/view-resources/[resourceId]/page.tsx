import Window from '@/Components/Window';
import { getResourceFromId } from '@/lib/data';

const getData = async (id: number) => {
  const data = await getResourceFromId(id);
  return data;
};

export default async function ResourcePage({ params }: { params: { resourceId: string } }) {
  const id = Number(params.resourceId);
  const data = await getData(id);
  if (!data) {
    return <div>Not Found</div>;
  }
  return (
    <Window English={data.category} Japanese={data.category}>
      {data.name}
    </Window>
  );
}

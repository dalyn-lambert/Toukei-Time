import GraphDonutMonth from '@/Components/GraphDonutMonth';

export default function ThisMonth({ params }: { params: { month: string } }) {
  const month = params.month;
  return (
    <div className='flex flex-col gap-4'>
      <GraphDonutMonth month={month} />
    </div>
  );
}

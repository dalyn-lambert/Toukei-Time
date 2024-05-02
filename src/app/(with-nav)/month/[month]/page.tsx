import GraphDonutMonth from '@/Components/GraphDonutMonth';
import Window from '@/Components/Window';
import { lightbulbIcon } from '@/lib/icons';

export default function ThisMonth({ params }: { params: { month: string } }) {
  const month = params.month;
  return (
    <div className='flex flex-col gap-4'>
      <Window English='Notice' Japanese='注目'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row gap-4 pb-4 items-center'>
            <span className='shrink-0'>{lightbulbIcon}</span>
            <span className='text-center text-lg font-bold'>Did you know?</span>
          </div>
          <span className='text-center'>
            You can see study data for a different day by changing the URL to month/YYYY-MM where YYYY-MM is the year
            and month you want to see.
          </span>
          <span className='text-center'>For example, month/2024-01 would show study data from January 2024.</span>
        </div>
      </Window>
      <GraphDonutMonth month={month} />
    </div>
  );
}

import GraphBarStackThisWeek from '@/Components/GraphBarStackRecent';
import TotalStudyTimeStats from '@/Components/GraphDonutAllStats';

export default function ThisMonth() {
  return (
    <div className='flex flex-col gap-4'>
      <TotalStudyTimeStats />
      <GraphBarStackThisWeek />
    </div>
  );
}

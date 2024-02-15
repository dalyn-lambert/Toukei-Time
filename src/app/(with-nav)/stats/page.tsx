import GraphBarStackThisWeek from '@/Components/GraphBarStackThisWeek';
import TotalStudyTimeStats from '@/Components/GraphDonutAllStats';

export default function ThisWeekPage() {
  return (
    <div className='flex flex-col gap-4'>
      <TotalStudyTimeStats />
      <GraphBarStackThisWeek />
    </div>
  );
}

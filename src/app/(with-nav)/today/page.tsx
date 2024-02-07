import GraphDonutToday from '@/Components/GraphDonutToday';
import TodaysStudies from '@/Components/TodaysStudies';

export default function TodayPage() {
  return (
    <div className='flex flex-col gap-4'>
      <TodaysStudies />
      <GraphDonutToday />
    </div>
  );
}

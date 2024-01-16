import GraphDonutToday from '@/Components/GraphDonutToday';
import LogOut from '@/Components/LogOut';
import TodaysStudies from '@/Components/TodaysStudies';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-4'>
      <TodaysStudies />
      <GraphDonutToday />
      <LogOut />
    </div>
  );
}

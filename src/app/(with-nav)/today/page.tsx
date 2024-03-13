import GraphDonutToday from '@/Components/GraphDonutToday';
import TodaysStudies from '@/Components/TodaysStudies';
import UseClient from '@/Components/UseClient';

export default function TodayPage() {
  return (
    <div className='flex flex-col gap-4 desktop:content-center'>
      {/* <TodaysStudies /> */}
      <UseClient />
      <GraphDonutToday />
    </div>
  );
}

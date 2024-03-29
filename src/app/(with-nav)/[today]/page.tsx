import GraphDonutToday from '@/Components/GraphDonutToday';
import TodaysStudies from '@/Components/TodaysStudies';

export default function TodayPage({ params }: { params: { today: string } }) {
  const today = params.today;
  return (
    <div className='flex flex-col gap-4 desktop:content-center'>
      <TodaysStudies today={today} />
      <GraphDonutToday today={today} />
    </div>
  );
}

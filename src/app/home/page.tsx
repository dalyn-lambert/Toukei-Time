import Graph from '@/Components/Graph';
import TodaysStudies from '@/Components/TodaysStudies';

export default function HomePage() {
  return (
    <main className='flex flex-col gap-4'>
      <TodaysStudies />
      <Graph />
    </main>
  );
}

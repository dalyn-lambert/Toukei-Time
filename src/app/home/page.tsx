import Graph from '@/Components/Graph';
import TodaysStudies from '@/Components/TodaysStudies';
import Welcome from '@/Components/Welcome';

export default function HomePage() {
  return (
    <main className='flex flex-col gap-4'>
      <TodaysStudies />
      <Graph />
      <Welcome />
    </main>
  );
}

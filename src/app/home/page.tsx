import Graph from '@/Components/Graph';
import Notepad from '@/Components/Notepad';
import Welcome from '@/Components/Welcome';

export default function HomePage() {
  return (
    <main className='flex flex-col gap-4'>
      <Notepad />
      <Graph />
      <Welcome />
    </main>
  );
}

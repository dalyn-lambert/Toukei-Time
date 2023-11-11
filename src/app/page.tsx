import Notepad from '@/Components/Notepad';
import Welcome from '@/Components/Welcome';

export default function Home() {
  return (
    <main className='p-4 flex flex-col gap-4'>
      <Welcome />
      <Notepad />
    </main>
  );
}

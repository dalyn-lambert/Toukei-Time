import AllStudyLogs from '@/Components/AllStudyLogs';
import Resource from '@/Components/Resource';

export default function ViewPage() {
  return (
    <main className='flex flex-col gap-4'>
      <AllStudyLogs />
      <Resource />
    </main>
  );
}

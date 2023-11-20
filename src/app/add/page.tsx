import AddResource from '@/Components/AddResource';
import AddStudyLog from '@/Components/AddStudyLog';

export default function AddPage() {
  return (
    <main className='flex flex-col gap-4'>
      <AddStudyLog />
      <AddResource />
    </main>
  );
}

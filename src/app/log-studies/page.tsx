import AddStudyLog from '@/Components/AddStudyLog';
import Navigation from '@/Components/Navigation';

export default function LogStudiesPage() {
  return (
    <main className='flex flex-col gap-4'>
      <AddStudyLog />
      <Navigation />
    </main>
  );
}

import AddResource from '@/Components/AddResource';
import Navigation from '@/Components/Navigation';

export default function AddResourcePage() {
  return (
    <main className='flex flex-col gap-4'>
      <AddResource />
      <Navigation />
    </main>
  );
}

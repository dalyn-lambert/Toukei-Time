import Introduction from '@/Components/Introduction';
import LogIn from '@/Components/LogIn';

export default function LandingPage() {
  return (
    <main className='flex flex-col gap-4'>
      <Introduction />
      <LogIn />
    </main>
  );
}

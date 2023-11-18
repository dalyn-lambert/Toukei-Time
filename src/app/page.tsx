import Introduction from '@/Components/Introduction';
import LogIn from '@/Components/LogIn';
import Registration from '@/Components/Registration';

export default function LandingPage() {
  return (
    <main className='flex flex-col gap-4'>
      <Introduction />
      <LogIn />
      <Registration />
    </main>
  );
}

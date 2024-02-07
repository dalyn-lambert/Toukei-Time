import LogIn from '@/Components/LogIn';
import Welcome from '@/Components/Welcome';

export default function LandingPage() {
  return (
    <div className='flex flex-col gap-4 min-w-full'>
      <Welcome />
      <LogIn />
    </div>
  );
}

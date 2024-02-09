import LogIn from '@/Components/LogIn';
import Welcome from '@/Components/Welcome';

export default function LandingPage() {
  return (
    <div className='flex flex-col gap-4 h-full justify-between'>
      <div className='flex flex-col gap-4'>
        <Welcome />
        <LogIn />
      </div>
      <div className='text-center flex flex-col'>
        <span>A project by Dalyn Lambert</span>
        <span>Contact Me: </span>
      </div>
    </div>
  );
}

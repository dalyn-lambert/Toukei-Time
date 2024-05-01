import LogOut from '@/Components/LogOut';
import ProfileHeader from '@/Components/ProfileHeader';
import ProfileStats from '@/Components/ProfileStats';
import Window from '@/Components/Window';
import { lightbulbIcon } from '@/lib/icons';

export default function Profile() {
  return (
    <div className='flex flex-col gap-4'>
      <ProfileHeader />
      <ProfileStats />
      <Window English='Notice' Japanese='注目'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row gap-4 pb-4 items-center'>
            <span className='shrink-0'>{lightbulbIcon}</span>
            <span className='text-center text-lg font-bold'>Did you know?</span>
          </div>
          <span className='text-center'>
            You can see study data for a different day by changing the URL to /YYYY-MM-DD where YYYY-MM-DD is the date
            you want to see.
          </span>
          <span className='text-center'>For example, /2024-01-15 would show study data from January 15, 2024.</span>
        </div>
      </Window>
      <LogOut />
    </div>
  );
}

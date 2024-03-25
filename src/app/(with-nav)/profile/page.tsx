import LogOut from '@/Components/LogOut';
import ProfileHeader from '@/Components/ProfileHeader';
import ProfileStats from '@/Components/ProfileStats';

export default function Profile() {
  return (
    <div className='flex flex-col gap-4'>
      <ProfileHeader />
      <ProfileStats />
      <LogOut />
    </div>
  );
}

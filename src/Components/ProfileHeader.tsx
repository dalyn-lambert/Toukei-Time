import { getUser } from '@/lib/data';
import Window from './Window';

async function ProfileHeader() {
  const user = await getUser();
  return (
    <Window English='Welcome!' Japanese='ようこそ！'>
      <div className='p-4 text-center flex flex-col gap-2'>
        <span>ようこそ {user?.username}!</span>
        <span>Thanks for using Toukei Time.</span>
        <span>You are currently registered with the email {user?.email}</span>
      </div>
    </Window>
  );
}

export default ProfileHeader;

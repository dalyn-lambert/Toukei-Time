import { signOut } from '@/auth';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

function LogOut() {
  return (
    <Window English='Log Out' Japanese='ログアウト' category='Danger'>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <LogOutButton />
      </form>
    </Window>
  );
}

function LogOutButton() {
  return (
    <div className='pt-2'>
      <ButtonGeneral label='Log Out' type='Danger' />
    </div>
  );
}

export default LogOut;

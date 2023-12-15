import { signOut } from '@/auth';
import StyledButton from './StyledButton';
import Window from './Window';

function LogOut() {
  return (
    <Window English='Log Out' Japanese='Log Out'>
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
      <StyledButton label='Log Out' />
    </div>
  );
}

export default LogOut;

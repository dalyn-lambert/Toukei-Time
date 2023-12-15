import { signOut } from '@/auth';
import StyledButton from './StyledButton';

function LogOut() {
  return (
    <div>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <LogOutButton />
      </form>
    </div>
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

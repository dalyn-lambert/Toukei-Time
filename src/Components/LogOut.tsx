import { signOut } from '@/auth';
import StyledButton from './StyledButton';

function LogOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <LogOutButton />
    </form>
  );
}

function LogOutButton() {
  return (
    <div className='pt-2'>
      <StyledButton label='Log Out' type='Danger' />
    </div>
  );
}

export default LogOut;

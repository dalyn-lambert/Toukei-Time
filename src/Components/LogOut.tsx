import { signOut } from '@/auth';
import ButtonGeneral from './ButtonGeneral';

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
      <ButtonGeneral label='Log Out' type='Danger' />
    </div>
  );
}

export default LogOut;

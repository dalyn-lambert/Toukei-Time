import { signOut } from '@/auth';

function LogOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button>Log Out</button>
    </form>
  );
}

export default LogOut;

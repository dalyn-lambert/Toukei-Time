'use client';

import { authenticate } from '@/lib/actions';
import { useFormState } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function LogIn() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  return (
    <Window English='Log In' Japanese='ログイン'>
      <>
        <form action={dispatch}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' name='email' placeholder='Enter your email address' required />
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' name='password' placeholder='Enter password' required minLength={6} />
          </div>
        </form>
        <div className='pt-2'>
          <StyledButton label='Enter' />
        </div>
        {/* need to style error message for myself later */}
        <div className='flex h-8 items-end space-x-1' aria-live='polite' aria-atomic='true'>
          {state === 'CredentialsSignin' && (
            <>
              <p className='text-sm text-red-500'>Invalid credentials</p>
            </>
          )}
        </div>
      </>
    </Window>
  );
}

export default LogIn;

'use client';

import { authenticate } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function LogIn() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <Window English='Log In' Japanese='ログイン'>
      <form action={dispatch}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' />
          <label htmlFor='password'>Password:</label>
          <input type='text' id='password' />
        </div>
        <LoginButton />
        <div className='flex h-8 items-end space-x-1' aria-live='polite' aria-atomic='true'>
          {/* style this later */}
          {errorMessage && (
            <>
              <p className='text-sm text-red-500'>{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </Window>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-2' aria-disabled={pending}>
      <StyledButton label='Enter' />
    </div>
  );
}

export default LogIn;

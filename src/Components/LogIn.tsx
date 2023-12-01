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
          <input id='email' type='email' name='email' placeholder='Enter your email address' required />

          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' placeholder='Enter password' required minLength={6} />
        </div>
        <LoginButton />
        <div className='flex items-end' aria-live='polite' aria-atomic='true'>
          {/* remove this once magic links are implemented */}
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
      <StyledButton label='Log In' />
    </div>
  );
}

export default LogIn;

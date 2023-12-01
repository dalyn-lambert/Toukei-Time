'use client';

import StyledButton from './StyledButton';
import Window from './Window';

function LogIn() {
  return (
    <Window English='Log In' Japanese='ログイン'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' name='email' placeholder='Enter your email address' required />
          </div>
        </form>
        <div className='p-2'>
          <StyledButton label='Enter' />
        </div>
      </>
    </Window>
  );
}

export default LogIn;

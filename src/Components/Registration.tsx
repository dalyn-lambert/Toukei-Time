import StyledButton from './StyledButton';
import Window from './Window';

function Registration() {
  return (
    <Window English='Create an account' Japanese='アカウントを作成する'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' />
            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' />
          </div>
        </form>
        <div className='pt-2'>
          <StyledButton label='Create' />
        </div>
      </>
    </Window>
  );
}

export default Registration;

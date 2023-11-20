import Window from './Window';

function Introduction() {
  return (
    <Window English='Welcome!' Japanese='ようこそ！'>
      <div className=' text-center flex flex-col gap-2'>
        <span className='text-xl'>Welcome to Toukei Time!</span>
        <span className='text-lg'>Log in or create an account to track your native material studies.</span>
      </div>
    </Window>
  );
}

export default Introduction;

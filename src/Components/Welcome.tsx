import Window from './Window';

function Welcome() {
  return (
    <Window English='Welcome!' Japanese='ようこそ！'>
      <div className=' text-center flex flex-col gap-2'>
        <span className='text-xl'>Welcome to Toukei Time!</span>
      </div>
    </Window>
  );
}

export default Welcome;

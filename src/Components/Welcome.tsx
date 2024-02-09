import Window from './Window';

function Welcome() {
  return (
    <Window English='Welcome!' Japanese='ようこそ！'>
      <div className=' text-center flex flex-col gap-2'>
        <span className='text-xl'>Welcome to Toukei Time!</span>
        <span>Here you can track your native material study time. Such as reading manga or listening to podcasts.</span>
      </div>
    </Window>
  );
}

export default Welcome;

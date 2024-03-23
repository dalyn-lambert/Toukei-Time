import Notepad from './Notepad';
import Window from './Window';

function Welcome() {
  return (
    <Window English='Welcome!' Japanese='ようこそ！'>
      <Notepad>
        <div className=' text-center flex flex-col gap-2'>
          <span className='text-xl'>Welcome to Toukei Time!</span>
          <span>
            Here you can track your native material studies, such as time spent reading manga or listening to podcasts.
          </span>
        </div>
      </Notepad>
    </Window>
  );
}

export default Welcome;

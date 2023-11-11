import Window from './Window';

const Welcome = async () => {
  return (
    <Window English='Today is...' Japanese='今日は。。。'>
      <div className='flex flex-col text-center'>
        <span>こんにちは、Cinder!</span>
        <span>What would you like to do?</span>
      </div>
    </Window>
  );
};

export default Welcome;

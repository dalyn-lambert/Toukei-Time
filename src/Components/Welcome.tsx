import StyledButton from './StyledButton';
import Window from './Window';

function Welcome() {
  return (
    <Window English='Today is...' Japanese='今日は。。。'>
      <div className='flex flex-col items-center'>
        <span>こんにちは、Cinder!</span>
        <span>What would you like to do?</span>
        <div className='flex flex-row gap-4 pt-4'>
          <StyledButton label='Log Studies' />
          <StyledButton label='Add Resource' />
        </div>
      </div>
    </Window>
  );
}

export default Welcome;

import StyledButton from './StyledButton';
import Window from './Window';

function AddStudyLog() {
  return (
    <Window English='Add a study log' Japanese='勉強を'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='details'>Details:</label>
            <input type='text' id='details' />

            <label htmlFor='time'>Time:</label>
            <input type='text' id='time' />

            <label htmlFor='category'>Category:</label>
            <input type='text' id='category' />

            <label htmlFor='date'>Date:</label>
            <input type='text' id='date' />

            <label htmlFor='resource'>Resource:</label>
            <input type='text' id='resource' />
          </div>
        </form>
        <div className='pt-2'>
          <StyledButton label='Add' />
        </div>
      </>
    </Window>
  );
}

export default AddStudyLog;

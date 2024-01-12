import StyledButton from './StyledButton';
import Window from './Window';

function AddStudyLog() {
  return (
    <Window English='Add a study log' Japanese='勉強を'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='details'>Details:</label>
            <input type='text' id='details' className='pl-1' />

            <label htmlFor='time'>Time:</label>
            <input type='text' id='time' className='pl-1' />

            <label htmlFor='category'>Category:</label>
            <input type='text' id='category' className='pl-1' />

            <label htmlFor='date'>Date:</label>
            <input type='text' id='date' className='pl-1' />

            <label htmlFor='resource'>Resource:</label>
            <input type='text' id='resource' className='pl-1' />
          </div>
        </form>
        <div className='pt-3'>
          <StyledButton label='Add Study Log' />
        </div>
      </>
    </Window>
  );
}

export default AddStudyLog;

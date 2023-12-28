import StyledButton from './StyledButton';
import Window from './Window';

function AddResource() {
  return (
    <Window English='Add a resource' Japanese='Resource'>
      <>
        <form className='add-resource'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' required={true} />

            <label htmlFor='type'>Type:</label>
            <input type='text' id='type' required={true} />

            <label htmlFor='status'>Status:</label>
            <select id='status' required={true}>
              <option value='current'>Current</option>
              <option value='want'>Planned</option>
              <option value='completed'>Completed</option>
              <option value='on hold'>On Hold</option>
              <option value='dropped'>Dropped</option>
            </select>

            <label htmlFor='link'>Link:</label>
            <input type='text' id='link' required={false} />

            <label htmlFor='notes'>Notes:</label>
            <input type='text' id='notes' required={false} />
          </div>
        </form>
        <div className='pt-2'>
          <StyledButton label='Add' />
        </div>
      </>
    </Window>
  );
}

export default AddResource;

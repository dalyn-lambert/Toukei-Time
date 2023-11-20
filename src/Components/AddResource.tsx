import StyledButton from './StyledButton';
import Window from './Window';

function AddResource() {
  return (
    <Window English='Add a resource' Japanese='resource'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' />

            <label htmlFor='type'>Type:</label>
            <input type='text' id='type' />

            <label htmlFor='status'>Status:</label>
            <input type='text' id='status' />

            <label htmlFor='link'>Link:</label>
            <input type='text' id='link' />

            <label htmlFor='notes'>Notes:</label>
            <input type='text' id='notes' />
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

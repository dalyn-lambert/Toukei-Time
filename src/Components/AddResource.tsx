import { Category, Status } from '@prisma/client';
import StyledButton from './StyledButton';
import Window from './Window';

function AddResource() {
  const categories = Object.keys(Category);
  const statuses = Object.keys(Status);
  return (
    <Window English='Add a resource' Japanese='Resource'>
      <>
        <form className='add-resource'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' required={true} />

            <label htmlFor='category'>Category:</label>
            <select id='category' required={true}>
              {categories.map((category) => (
                <option key={category} value={category.toLocaleLowerCase()}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor='status'>Status:</label>
            <select id='status' required={true}>
              {statuses.map((status) => (
                <option key={status} value={status.toLocaleLowerCase()}>
                  {status}
                </option>
              ))}
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

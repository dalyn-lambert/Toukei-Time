'use client';
import { Category, Resource, Status } from '@prisma/client';
import { useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function UpdateResource(resource: Resource) {
  console.log(resource);
  const categories = Object.keys(Category);
  const statuses = Object.keys(Status);
  return (
    <Window English='Add a resource' Japanese='Resource'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' required={true} defaultValue={resource.name} />

            <label htmlFor='category'>Category:</label>
            <select name='category' id='category' required={true} defaultValue={resource.category}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor='status'>Status:</label>
            <select name='status' id='status' required={true} defaultValue={resource.status}>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <label htmlFor='link'>Link:</label>
            <input type='text' name='link' id='link' required={false} defaultValue={resource.link} />

            <label htmlFor='notes'>Notes:</label>
            <input type='text' name='notes' id='notes' required={false} defaultValue={resource.notes} />
          </div>
          <UpdateResourceButton />
        </form>
      </>
    </Window>
  );
}

function UpdateResourceButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-2' aria-disabled={pending}>
      <StyledButton label='Update' />
    </div>
  );
}

export default UpdateResource;

'use client';

import { createResource } from '@/lib/actions';
import { Category, Status } from '@prisma/client';
import { useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function AddResource() {
  const categories = Object.keys(Category);
  const statuses = Object.keys(Status);
  return (
    <Window English='Add a resource' Japanese='Resource'>
      <>
        <form action={createResource}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' required={true} />

            <label htmlFor='category'>Category:</label>
            <select name='category' id='category' required={true}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor='status'>Status:</label>
            <select name='status' id='status' required={true}>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <label htmlFor='link'>Link:</label>
            <input type='text' name='' id='link' required={false} />

            <label htmlFor='notes'>Notes:</label>
            <input type='text' name='notes' id='notes' required={false} />
          </div>
          <AddResourceButton />
        </form>
      </>
    </Window>
  );
}

function AddResourceButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-2' aria-disabled={pending}>
      <StyledButton label='Add' />
    </div>
  );
}

export default AddResource;

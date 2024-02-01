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
    <Window English='Add a resource' Japanese='リソースを追加する'>
      <>
        <form action={createResource}>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-1'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Awesome Podcast'
                required={true}
                className='pl-1 w-full'
              />
            </div>
            <div className='flex flex-row gap-2 justify-between'>
              <div className='flex flex-row gap-1'>
                <label htmlFor='status'>Status:</label>
                <select name='status' id='status' required={true} className='text-center'>
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className='flex flex-row gap-1'>
                <label htmlFor='category'>Category:</label>
                <select name='category' id='category' required={true} className='text-center'>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='flex flex-row gap-1'>
              <label htmlFor='link'>Link:</label>
              <input
                type='text'
                name='link'
                id='link'
                placeholder='www.spotify.com/awesome-podcast'
                required={false}
                className='pl-1 w-full'
              />
            </div>
            <div className='flex flex-col gap-0'>
              <label htmlFor='notes'>Notes:</label>
              <textarea
                name='notes'
                id='notes'
                placeholder='This is a great podcast. The host speaks with natural Japanese. '
                required={false}
                className='pl-1'
              />
            </div>
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
    <div className='pt-3' aria-disabled={pending}>
      <StyledButton label='Add Resource' />
    </div>
  );
}

export default AddResource;

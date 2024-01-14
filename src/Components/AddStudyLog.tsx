'use client';

import { createStudyLog } from '@/lib/actions';
import { Category, Resource } from '@prisma/client';
import { format } from 'date-fns';
import { useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function AddStudyLog({ resources }: { resources: Resource[] }) {
  const categories = Object.keys(Category);
  const today = format(Date(), 'yyyy-MM-dd');

  return (
    <Window English='Add a study log' Japanese='勉強を？？'>
      <form action={createStudyLog}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Title:</label>
          <input name='title' type='text' id='title' required={true} className='pl-1' />

          <label htmlFor='time'>Time (minutes):</label>
          <input name='time' type='number' id='time' required={true} className='pl-1' />

          <label htmlFor='category'>Category:</label>
          <select name='category' id='category' required={true}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor='date'>Date:</label>
          <input name='date' type='date' id='date' defaultValue={today} required={true} className='pl-1' />
          <label htmlFor='resource'>Resource:</label>
          <select name='resource' id='resource' required={true} className='pl-1'>
            {resources.map((resource) => (
              <option key={resource.id} value={resource.name}>
                {resource.name}
              </option>
            ))}
          </select>
        </div>
        <AddStudyLogButton />
      </form>
    </Window>
  );
}

function AddStudyLogButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-3' aria-disabled={pending}>
      <StyledButton label='Add Study Log' />
    </div>
  );
}

export default AddStudyLog;

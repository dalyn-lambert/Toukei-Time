'use client';

import { createStudyLog } from '@/lib/actions';
import { Category, StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import { useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function UpdateStudyLog(log: StudyLog) {
  const categories = Object.keys(Category);
  // would like to revist this sometime because it seems weird
  // const allResources: Resource[] = Object.values(resources);

  return (
    <Window English='Add a study log' Japanese='勉強を？？'>
      <form action={createStudyLog}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Title:</label>
          <input name='title' type='text' id='title' required={true} defaultValue={log.title} className='pl-1' />

          <label htmlFor='time'>Time (minutes):</label>
          <input name='time' type='number' id='time' required={true} defaultValue={log.time} className='pl-1' />

          <label htmlFor='category'>Category:</label>
          <select name='category' id='category' required={true} defaultValue={log.category}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor='date'>Date:</label>
          <input
            name='date'
            type='date'
            id='date'
            required={true}
            defaultValue={log.date.toString()}
            className='pl-1'
          />
          <label htmlFor='resource'>Resource:</label>
          {/* <select name='resource' id='resource' required={true} className='pl-1'>
            {allResources.map((resource) => (
              <option key={resource.id} value={resource.name}>
                {resource.name}
              </option>
            ))}
          </select> */}
        </div>
        <UpdateStudyLogButton />
      </form>
    </Window>
  );
}

function UpdateStudyLogButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-3' aria-disabled={pending}>
      <StyledButton label='Update Study Log' />
    </div>
  );
}

export default UpdateStudyLog;

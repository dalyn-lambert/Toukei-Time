'use client';

import { updateStudyLog } from '@/lib/actions';
import { Category, Resource, StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import { useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function UpdateStudyLog({ log, resources }: { log: StudyLog; resources: Resource[] }) {
  const categories = Object.keys(Category);
  const date = format(log.date, 'yyyy-MM-dd');
  const filteredResource = resources.filter((resource) => resource.id === log.resourceId);
  const currentResource = filteredResource[0].name;

  const updateStudyLogWithId = updateStudyLog.bind(null, log.id);

  return (
    <Window English='Add a study log' Japanese='勉強を？？'>
      <form action={updateStudyLogWithId}>
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
          <input name='date' type='date' id='date' required={true} defaultValue={date} className='pl-1' />
          <label htmlFor='resource'>Resource:</label>
          <select name='resource' id='resource' required={true} defaultValue={currentResource} className='pl-1'>
            {resources.map((resource) => (
              <option key={resource.id} value={resource.name}>
                {resource.name}
              </option>
            ))}
          </select>
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

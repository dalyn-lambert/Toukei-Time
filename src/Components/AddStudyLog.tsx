'use client';

import { createStudyLog } from '@/lib/actions';
import { getFormattedToday } from '@/lib/utils';
import { Category, Resource } from '@prisma/client';
import { ChangeEvent, useState } from 'react';
import { useFormStatus } from 'react-dom';
import StyledButton from './StyledButton';
import Window from './Window';

function AddStudyLog({ resources }: { resources: Resource[] }) {
  const categories = Object.keys(Category);
  const today = getFormattedToday();
  const [selectedCategory, setSelectedCategory] = useState('Listening');
  const handleCategoryFilter = (e: ChangeEvent<{ value: string }>) => {
    const newValue = e.target.value;
    setSelectedCategory(newValue);
  };
  const filterdResources = resources.filter((resource) => resource.category === selectedCategory);

  return (
    <Window English='Add a study log' Japanese='勉強を？？'>
      <form action={createStudyLog}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Title:</label>
          <input name='title' type='text' id='title' required={true} className='pl-1' />

          <label htmlFor='time'>Time (minutes):</label>
          <input name='time' type='number' id='time' required={true} className='pl-1' />

          <label htmlFor='category'>Category:</label>
          <select name='category' id='category' required={true} onChange={handleCategoryFilter}>
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
            {filterdResources.map((resource) => (
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

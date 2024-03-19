'use client';

import { createStudyLog } from '@/lib/actions';
import { UTCDate } from '@date-fns/utc';
import { Category, Resource } from '@prisma/client';
import { format } from 'date-fns';
import { ChangeEvent, useState } from 'react';
import { useFormStatus } from 'react-dom';
import ButtonGeneral from './ButtonGeneral';

function AddStudyLog({ resources }: { resources: Resource[] }) {
  const categories: Category[] = Object.values(Category);
  const today = format(new UTCDate().toISOString(), 'yyyy-MM-dd');
  const [selectedCategory, setSelectedCategory] = useState('Listening');
  const handleCategoryFilter = (e: ChangeEvent<{ value: string }>) => {
    const newValue = e.target.value;
    setSelectedCategory(newValue);
  };
  const filterdResources = resources.filter((resource) => resource.category === selectedCategory);

  return (
    <form action={createStudyLog}>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-1'>
          <label htmlFor='title'>Title:</label>
          <input name='title' type='text' placeholder='Episode 4' id='title' required={true} className='w-full pl-1' />
        </div>
        <div className='flex flex-row gap-2 justify-between'>
          <div className='flex flex-row gap-1'>
            <label htmlFor='time'>Minutes:</label>
            <input name='time' type='number' placeholder='20' id='time' required={true} className='w-11 text-center' />
          </div>
          <div className='flex flex-row gap-1'>
            <label htmlFor='category'>Category:</label>
            <select
              name='category'
              id='category'
              required={true}
              onChange={handleCategoryFilter}
              className='text-center'
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-row gap-1'>
          <label htmlFor='date'>Date:</label>
          <input name='date' type='date' id='date' defaultValue={today} required={true} className='text-center' />
        </div>
        <div className='flex flex-col gap-0'>
          <label htmlFor='resource'>Resource:</label>
          <select name='resource' id='resource' required={true} className='pl-1'>
            {filterdResources.map((resource) => (
              <option key={resource.id} value={resource.name}>
                {resource.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <AddStudyLogButton />
    </form>
  );
}

function AddStudyLogButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-3' aria-disabled={pending}>
      <ButtonGeneral label='Add Study Log' />
    </div>
  );
}

export default AddStudyLog;

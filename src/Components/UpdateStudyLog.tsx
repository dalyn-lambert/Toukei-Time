'use client';

import { updateStudyLog } from '@/lib/actions';
import { UTCDate } from '@date-fns/utc';
import { Category, Resource, StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

function UpdateStudyLog({ log, resources }: { log: StudyLog; resources: Resource[] }) {
  const categories = Object.keys(Category);
  const date = format(new UTCDate(log.date), 'yyyy-MM-dd');

  const filteredResource = resources.filter((resource) => resource.id === log.resourceId);
  const currentResourceName = filteredResource[0].name;
  const currentResourceCategory = filteredResource[0].category;
  const currentResourceId = filteredResource[0].id;

  const updateStudyLogWithId = updateStudyLog.bind(null, log.id);

  return (
    <Window English='Update study log' Japanese='ローグをアップデート' category={currentResourceCategory}>
      <form action={updateStudyLogWithId}>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-1'>
            <label htmlFor='title'>Title:</label>
            <input
              defaultValue={log.title}
              name='title'
              type='text'
              placeholder='Episode 4'
              id='title'
              required={true}
              className='w-full pl-1'
            />
          </div>
          <div className='flex flex-row gap-2 justify-between'>
            <div className='flex flex-row gap-1'>
              <label htmlFor='time'>Minutes:</label>
              <input
                defaultValue={log.time}
                name='time'
                type='number'
                placeholder='20'
                id='time'
                required={true}
                className='w-11 text-center'
              />
            </div>
            <div className='flex flex-row gap-1'>
              <label htmlFor='category'>Category:</label>
              <select defaultValue={log.category} name='category' id='category' required={true} className='text-center'>
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
            <input name='date' type='date' id='date' defaultValue={date} required={true} className='text-center' />
          </div>

          <div className='flex flex-col gap-0'>
            <label htmlFor='resource'>Resource:</label>
            <select defaultValue={currentResourceName} name='resource' id='resource' required={true} className='pl-1'>
              {resources.map((resource) => (
                <option key={resource.id} value={resource.name}>
                  {resource.name}
                </option>
              ))}
            </select>
            <Link href={`/browse/resource/${currentResourceId}`} className=''>
              Go to resource
            </Link>
          </div>
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
      <ButtonGeneral label='Update Study Log' />
    </div>
  );
}

export default UpdateStudyLog;

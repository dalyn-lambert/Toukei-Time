'use client';

import { Resource } from '@prisma/client';
import clsx from 'clsx';
import React from 'react';
import AddResource from './AddResource';
import AddStudyLog from './AddStudyLog';
import Window from './Window';

function AddWindow({ resources }: { resources: Resource[] }) {
  const [add, setAdd] = React.useState('Study Log');
  return (
    <Window English={`Add a ${add}`} Japanese='???'>
      <div className='flex flex-row justify-end'>
        <div className='border-b-2 border-dark-gray flex-grow'></div>
        <button
          className={clsx(
            'border-r border-l-2 border-t-2 border-dark-gray p-2 bg-dark-gray bg-opacity-30',
            add === 'Study Log' && 'bg-gray bg-opacity-100 border-b-none underline',
            add === 'Resource' && 'border-b-2'
          )}
          onClick={() => setAdd('Study Log')}
        >
          Log Studies
        </button>
        <button
          className={clsx(
            'border-l border-r-2 border-t-2 border-dark-gray p-2 bg-dark-gray bg-opacity-30',
            add === 'Resource' && 'bg-gray bg-opacity-100 border-b-none underline',
            add === 'Study Log' && 'border-b-2'
          )}
          onClick={() => setAdd('Resource')}
        >
          Add Resource
        </button>
      </div>
      <div className='border-x-2 border-b-2 border-dark-gray p-3'>
        {add === 'Study Log' ? <AddStudyLog resources={resources} /> : <AddResource />}
      </div>
    </Window>
  );
}

export default AddWindow;

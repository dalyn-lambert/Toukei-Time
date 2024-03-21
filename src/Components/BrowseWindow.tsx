'use client';

import Window from '@/Components/Window';
import { getIconForCategory } from '@/lib/utils';
import { Category, Resource, Status } from '@prisma/client';
import clsx from 'clsx';
import React from 'react';
import Notepad from './Notepad';
import ResourceEntry from './ResourceEntry';

function BrowseWindow({ resources }: { resources: Resource[] }) {
  const categories: Category[] = Object.values(Category);
  const statuses: Status[] = Object.values(Status);

  const [selectedCategory, setSelectedCategory] = React.useState<`${Category}`>(Category.Listening);
  const [selectedStatus, setSelectedStatus] = React.useState<`${Status}`>(Status.Current);

  const filteredResources = resources.filter(
    (resource) => resource.category === selectedCategory && resource.status === selectedStatus
  );

  return (
    <Window English='Browse' Japanese=''>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2 text-sm pl-2'>
          {statuses.map((status) => (
            <button
              key={status}
              className={clsx('', selectedStatus === status && 'underline')}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>
        <div className='flex flex-row justify-evenly'>
          {categories.map((category) => (
            <button
              key={category}
              className={clsx(
                'border-r border-l-2 border-t-2 border-dark-gray p-2 bg-dark-gray bg-opacity-30',
                selectedCategory === category && 'bg-gray shadow-inner shadow-white'
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {getIconForCategory(category)}
            </button>
          ))}
        </div>
      </div>
      <Notepad>
        <div className='flex flex-col gap-4'>
          {filteredResources.map((resource) => (
            <ResourceEntry key={resource.id} {...resource} />
          ))}
        </div>
      </Notepad>
    </Window>
  );
}
export default BrowseWindow;

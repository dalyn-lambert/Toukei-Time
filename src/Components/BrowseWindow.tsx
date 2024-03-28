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
    <div className='flex flex-col gap-4'>
      <Window English='Browse Resources' Japanese='資源を見る'>
        <div className='flex flex-row gap-3 text-sm pl-2 pb-4'>
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
        <div className='flex flex-row'>
          <div className='w-full'>
            <Notepad>
              <div className='flex flex-col gap-4'>
                {filteredResources.map((resource) => (
                  <ResourceEntry key={resource.id} {...resource} />
                ))}
              </div>
            </Notepad>
          </div>
          <div className='flex flex-col justify-evenly divide-y-2 border-y-2'>
            {categories.map((category) => (
              <button
                key={category}
                className={clsx(
                  'border-r-2  border-dark-gray p-2 bg-dark-gray bg-opacity-30 flex-grow',
                  selectedCategory === category && 'bg-gray bg-opacity-100'
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {getIconForCategory(category)}
              </button>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}
export default BrowseWindow;

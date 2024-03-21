'use client';

import Window from '@/Components/Window';
import { getIconForCategory } from '@/lib/utils';
import { Category, Resource } from '@prisma/client';
import clsx from 'clsx';
import React from 'react';
import Notepad from './Notepad';
import ResourceEntry from './ResourceEntry';

function BrowseWindow({ resources }: { resources: Resource[] }) {
  const categories: Category[] = Object.values(Category);
  const [selectedCategory, setSelectedCategory] = React.useState<`${Category}`>(Category.Listening);
  const filterdResources = resources.filter((resource) => resource.category === selectedCategory);

  return (
    <Window English='' Japanese=''>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-row gap-4'>
          {categories.map((category) => (
            <button
              key={category}
              className={clsx(
                ' border-r border-l-2 border-t-2 border-dark-gray p-2 bg-dark-gray bg-opacity-30',
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
          {filterdResources.map((resource) => (
            <ResourceEntry key={resource.id} {...resource} />
          ))}
        </div>
      </Notepad>
    </Window>
  );
}
export default BrowseWindow;

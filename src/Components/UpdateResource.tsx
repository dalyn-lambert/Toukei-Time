'use client';
import { updateResource } from '@/lib/actions';
import { getJapaneseNameforCategory } from '@/lib/utils';
import { Category, Resource, Status } from '@prisma/client';
import { useFormStatus } from 'react-dom';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

function UpdateResource(resource: Resource) {
  const categories = Object.keys(Category);
  const statuses = Object.keys(Status);
  const updateResourceWithId = updateResource.bind(null, resource.id);
  return (
    <Window
      English={resource.category}
      Japanese={`${getJapaneseNameforCategory(resource.category)}`}
      category={resource.category}
    >
      <form action={updateResourceWithId}>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-1'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              defaultValue={resource.name}
              required={true}
              className='pl-1 w-full'
            />
          </div>
          <div className='flex flex-row gap-2 justify-between'>
            <div className='flex flex-row gap-1'>
              <label htmlFor='status'>Status:</label>
              <select name='status' id='status' required={true} className='text-center pl-1' defaultValue={resource.status}>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex flex-row gap-1'>
              <label htmlFor='category'>Category:</label>
              <select
                name='category'
                id='category'
                required={true}
                className='text-center pl-1'
                defaultValue={resource.category}
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
            <label htmlFor='link'>Link:</label>
            <input
              defaultValue={resource.link || undefined}
              type='text'
              name='link'
              id='link'
              required={false}
              className='pl-1 w-full'
            />
          </div>
          <div className='flex flex-col gap-0'>
            <label htmlFor='notes'>Notes:</label>
            <textarea
              defaultValue={resource.notes || undefined}
              name='notes'
              id='notes'
              required={false}
              className='pl-1'
            />
          </div>
        </div>
        <UpdateResourceButton />
      </form>
    </Window>
  );
}

function UpdateResourceButton() {
  const { pending } = useFormStatus();
  return (
    <div className='pt-3' aria-disabled={pending}>
      <ButtonGeneral label='Update Resource' />
    </div>
  );
}

export default UpdateResource;

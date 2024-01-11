import { Resource } from '@prisma/client';
import Link from 'next/link';
import Window from './Window';

function ResourceEntry(resource: Resource) {
  return (
    <Link href={`/view-resources/${resource.id}`}>
      <Window English={resource.category} Japanese={resource.category}>
        <div className='flec flex-col gap-2'>
          {resource.name}
          <div className='flex flex-row justify-between'>
            <span>Delete</span> <span>Edit</span>
          </div>
        </div>
      </Window>
    </Link>
  );
}

export default ResourceEntry;

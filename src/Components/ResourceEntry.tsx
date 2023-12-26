import { Resource } from '@prisma/client';
import Window from './Window';

function ResourceEntry(resource: Resource) {
  return (
    <Window English={resource.type} Japanese={resource.type}>
      <div className='flec flex-col gap-2'>
        {resource.name}
        <div className='flex flex-row justify-between'>
          <span>Delete</span> <span>Edit</span>
        </div>
      </div>
    </Window>
  );
}

export default ResourceEntry;

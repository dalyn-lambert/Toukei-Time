import { Resource } from '@prisma/client';
import Window from './Window';

function ResourceEntry(resource: Resource) {
  return (
    <Window English='Resource' Japanese='Resource'>
      {resource.name}
    </Window>
  );
}

export default ResourceEntry;

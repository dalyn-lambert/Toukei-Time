import { Resource } from '@prisma/client';
import Link from 'next/link';
import Window from './Window';

function ResourceEntry(resource: Resource) {
  return (
    <Link href={`/view-resources/${resource.id}`} key={resource.id}>
      <Window English={resource.category} Japanese={resource.category} category={resource.category}>
        {resource.name}
      </Window>
    </Link>
  );
}

export default ResourceEntry;

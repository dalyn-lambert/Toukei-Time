import { getAllResources } from '@/lib/data';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

async function ResourceSelect() {
  const allResources = await getData();
  return (
    <>
      <label htmlFor='resource'>Resource:</label>
      <select id='resource' required={true} className='pl-1'>
        {allResources.map((resource) => (
          <option key={resource.id} value={resource.name}>
            {resource.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default ResourceSelect;

import { getAllResources } from '@/lib/data';
import { Category } from '@prisma/client';
import { format } from 'date-fns';
import StyledButton from './StyledButton';
import Window from './Window';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

async function AddStudyLog() {
  const categories = Object.keys(Category);
  const today = format(Date(), 'yyyy-MM-dd');
  const allResources = await getData();
  return (
    <Window English='Add a study log' Japanese='勉強を？？'>
      <>
        <form>
          <div className='flex flex-col gap-2'>
            <label htmlFor='details'>Details:</label>
            <input type='text' id='details' required={true} className='pl-1' />

            <label htmlFor='time'>Time (minutes):</label>
            <input type='number' id='time' className='pl-1' />

            <label htmlFor='category'>Category:</label>
            <select name='category' id='category' required={true}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor='date'>Date:</label>
            <input type='date' id='date' defaultValue={today} required={true} className='pl-1' />

            <label htmlFor='resource'>Resource:</label>
            <select id='resource' required={true} className='pl-1'>
              {allResources.map((resource) => (
                <option key={resource.id} value={resource.name}>
                  {resource.name}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className='pt-3'>
          <StyledButton label='Add Study Log' />
        </div>
      </>
    </Window>
  );
}

export default AddStudyLog;

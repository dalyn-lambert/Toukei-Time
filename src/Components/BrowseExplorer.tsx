import Notepad from '@/Components/Notepad';
import ResourceEntry from '@/Components/ResourceEntry';
import Window from '@/Components/Window';
import { getAllResources } from '@/lib/data';
import { Category } from '@prisma/client';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

async function BrowseExplorer() {
  const categories: Category[] = Object.values(Category);
  // const [selectedCategory, setSelectedCategory] = useState('Listening');
  const resources = await getData();
  // const filterdResources = resources.filter((resource) => resource.category === selectedCategory);

  return (
    <Window English='' Japanese=''>
      {/* <div className='flex flex-row justify-around pb-2'>
        {categories.map((category) => (
          <div key={category} className='flex flex-row gap-1'>
            <input type='radio' id={category} name='category' value={category} />
            <label htmlFor={category}>{getJapaneseNameforCategory(category)}</label>
          </div>
        ))}
      </div> */}
      <Notepad>
        <div className='flex flex-col gap-4'>
          {resources.map((resource) => (
            <ResourceEntry key={resource.id} {...resource} />
          ))}
        </div>
      </Notepad>
    </Window>
  );
}
export default BrowseExplorer;

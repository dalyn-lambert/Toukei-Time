import { getAllResources } from '@/lib/data';
import AddStudyLog from './AddStudyLog';

const getData = async () => {
  const data = await getAllResources();
  return data;
};

async function AddStudyLogWrapper() {
  const resources = await getData();

  return <AddStudyLog resources={resources} />;
}

export default AddStudyLogWrapper;

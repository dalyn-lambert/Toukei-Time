import Window from '@/Components/Window';
import { warningIcon } from '@/lib/icons';

export default function NotFound() {
  return (
    <main>
      <Window English='404 Not Found' Japanese='404 見つからない' category='Danger'>
        <div className='flex flex-row gap-4 px-8 pb-4 items-center'>
          <span className='shrink-0'>{warningIcon}</span>
          <div className='text-center'>Could not find the requested resource.</div>
        </div>
      </Window>
    </main>
  );
}

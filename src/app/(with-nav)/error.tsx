'use client';

import Window from '@/Components/Window';
import { warningIcon } from '@/lib/icons';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <Window English='Error!' Japanese='エラー' category='Danger'>
        <div className='flex flex-row gap-4 px-8 pb-4 items-center'>
          <span className='shrink-0'>{warningIcon}</span>
          <span className='text-center'>{error.toString()}</span>
        </div>
      </Window>
    </main>
  );
}

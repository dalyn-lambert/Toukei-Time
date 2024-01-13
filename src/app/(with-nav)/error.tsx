'use client';

import Window from '@/Components/Window';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <Window English='Error!' Japanese='エラー'>
        <h2 className='text-center'>{error.toString()}</h2>
      </Window>
    </main>
  );
}

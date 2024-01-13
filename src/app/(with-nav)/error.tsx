'use client';

import StyledButton from '@/Components/StyledButton';
import Window from '@/Components/Window';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <Window English='Something went wrong!' Japanese='Something went wrong!'>
        <h2 className='text-center'>Something went wrong!</h2>
        <ResetButton />
      </Window>
    </main>
  );
}

function ResetButton() {
  return (
    <div className='pt-3'>
      <Link href='/home'>
        <StyledButton label='Go Home' />
      </Link>
    </div>
  );
}

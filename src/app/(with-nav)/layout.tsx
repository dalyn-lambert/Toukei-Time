import Navigation from '@/Components/Navigation';
import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: 'Toukei Time',
  description: 'Track your native material studies for your Japanese learning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-pink grid grid-col justify-center'>
        <div className='p-4 w-screen pb-24 desktop:w-[30rem]'>{children}</div>
        <div className='fixed bottom-0 w-full'>
          <Navigation />
        </div>
      </body>
    </html>
  );
}

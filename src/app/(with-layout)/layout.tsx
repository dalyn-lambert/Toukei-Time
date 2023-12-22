import Navigation from '@/Components/Navigation';
import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: 'Toukei Time',
  description: 'Track your native material studies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-pink max-w-md flex flex-col justify-between'>
        <div className='p-4'>{children}</div>
        <Navigation />
      </body>
    </html>
  );
}

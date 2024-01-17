import Navigation from '@/Components/Navigation';
import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: 'Toukei Time',
  description: 'Track your native material studies.',
  icons: { icon: 'src/app/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-pink max-w-md flex flex-col '>
        <div className='p-4 pb-40'>{children}</div>
        <div className='fixed bottom-0 w-full'>
          <Navigation />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: 'Toukei Time',
  description: 'Track your native material studies for your Japanese learning.',
};

export default function SignInPageRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-pink grid grid-col justify-center'>
        <div className='p-4 w-screen desktop:w-96'>{children}</div>
      </body>
    </html>
  );
}

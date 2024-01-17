import type { Metadata } from 'next';
import 'src/app/globals.css';

export const metadata: Metadata = {
  title: 'Toukei Time',
  description: 'Track your native material studies.',
  icons: {  },
};

export default function SignInPageRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-pink max-w-md p-4 flex flex-col'>{children}</body>
    </html>
  );
}

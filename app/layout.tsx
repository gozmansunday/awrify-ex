import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { clash, mona, nohemi } from '@/lib/fontConfig';
import './globals.css';

export const metadata: Metadata = {
  title: 'Awrify',
}

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const fontVariables = `${clash.variable} ${mona.variable} ${nohemi.variable}`;

  return (
    <html lang="en" className={`${fontVariables}`}>
      <body className='font-clash'>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

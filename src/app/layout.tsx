import AppHeader from '@/components/AppHeader';
import './globals.css';
import { Inter } from 'next/font/google';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my Next App',
  description: 'Generated by create next app',
  keywords: 'homepage, nextjs',
  icons: {
    icon: '/favicon.ico'
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
        <AppHeader/>
        <main className='max-w-5xl mx-auto py-6 px-5'>
        {children}
        </main>
        </SessionProvider>
        </body>
    </html>
  )
}

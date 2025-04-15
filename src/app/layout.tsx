import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Godara Brothers - A Legacy of Excellence & Innovation',
  description: 'A diversified business empire shaping industries across the globe',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-[6.94%] h-full overflow-visible border-[1px] border-r border-l border-solid border-[#603812]'>
          <Navbar />
          {children}
          <Footer />
          </div>
      </body>
    </html>
  );
}
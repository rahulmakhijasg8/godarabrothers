import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Godara Brothers - A Legacy of Excellence & Innovation',
  description: 'A diversified business empire shaping industries across the globe',
  icons: [
    {
        rel: 'icon',
        url: '/godaranewlogo.ico',
        type: 'image/x-icon',
        sizes: '30x30',
    },
],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Vertical lines container with fixed positioning */}
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="h-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative">
            {/* Left vertical line */}
            <div className="absolute left-[16px] md:left-[32px] sm:left-[24px] lg:left-[100px] top-0 bottom-0 w-px bg-[#CFC3B8] md:bg-[#603812]"></div>
            
            {/* Right vertical line */}
            <div className="absolute right-[16px] md:right-[32px] sm:right-[24px] lg:right-[100px] top-0 bottom-0 w-px bg-[#CFC3B8] md:bg-[#603812]"></div>
          </div>
        </div>
        
        {/* Main content container */}
        <div className="max-w-[1440px]">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
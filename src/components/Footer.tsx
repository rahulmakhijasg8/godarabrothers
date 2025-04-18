import { Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

// Initialize the font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/philanthropy', label: 'Philanthropy' }, // Changed from 'About Us' to 'Philanthropy'
    { href: '/group-companies', label: 'Group Companies' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  // Contact information with SVG icons from public folder
  const contactInfo = [
    { icon: '/Mail.svg', alt: 'Email', content: 'info@godarabrothers.com' },
    { icon: '/Phone.svg', alt: 'Phone', content: '+971508711333, +971565544111' },
    { icon: '/Map_Pin.svg', alt: 'Location', content: 'Dubai, UAE' },
  ];

  return (
    <footer className="border-t border-[#603812] pt-12 md:pt-16 pb-12 px-4 sm:px-6 md:px-8 lg:px-[100px]">
      {/* Container with proper padding */}
      <div className="max-w-full mx-auto md:pl-4">
        {/* Mobile heading (appears only on mobile) */}
        <div className="md:hidden mb-10 text-left pl-2">
          <h2 className="font-['Libre_Baskerville'] text-2xl sm:text-3xl">
            <span className="text-[#c9a750] font-bold">Godara Brothers</span>
          </h2>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row">
          {/* Company name - only visible on desktop */}
          <div className="hidden md:block md:w-1/3 pl-4 pr-8">
            <h2 className="font-['Libre_Baskerville'] text-2xl lg:text-3xl">
              <span className="text-[#c9a750] font-bold">Godara Brothers</span>
            </h2>
          </div>

          {/* Two column layout for mobile, three column for desktop */}
          <div className="flex flex-row md:w-2/3 px-2 md:pl-6">
            {/* Navigation links */}
            <div className="w-1/2 md:w-1/2 pr-4 md:pl-4">
              <ul className={`list-none p-0 ${roboto.className}`}>
                {navLinks.map((link, index) => (
                  <li key={index} className="mb-6">
                    <Link 
                      href={link.href}
                      className="text-base sm:text-lg text-[#603812] font-light hover:text-[#c9a750] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact information */}
            <div className="w-1/2 md:w-1/2 pl-2 pr-4 md:pl-6">
              <ul className={`list-none p-0 ${roboto.className}`}>
                {contactInfo.map((item, index) => (
                  <li key={index} className="mb-6 flex items-start text-base sm:text-lg text-[#603812] font-light">
                    <Image 
                      src={item.icon} 
                      alt={item.alt} 
                      width={20} 
                      height={20} 
                      className="min-w-[20px] mr-2 mt-1"
                    />
                    <span className="break-words overflow-hidden">{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
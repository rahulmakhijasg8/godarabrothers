'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links array for DRY code
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/group-companies', label: 'Group Companies' },
    { href: '/philanthropy', label: 'Philanthropy' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  // Function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Add this to your global CSS file or a style tag */}
      <style jsx global>{`
        .nav-link-gradient {
          background-image: linear-gradient(127deg, #D4B75A 0%, #D9BE6B 10%, #E5D59D 25%, #DDCA80 40%, #C9A745 55%, #D8C177 70%, #F0E4AD 85%, #D4B75A 100%);
        }
        
        .nav-link:hover:not(.active) {
          background-image: linear-gradient(127deg, #D4B75A 0%, #D9BE6B 10%, #E5D59D 25%, #DDCA80 40%, #C9A745 55%, #D8C177 70%, #F0E4AD 85%, #D4B75A 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
        }
      `}</style>

      <div className="mt-6 sm:mt-8 md:mt-10 border-t border-b border-[#CFC3B8] md:border-[#603812] border-solid">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
          <nav 
            className={`
              w-full 
              flex 
              items-center 
              justify-between 
              h-[50px] md:h-[80px]
              px-4 sm:px-6 md:px-8 lg:px-[70px]
              bg-white
              transition-all
              duration-300
              ${scrolled ? 'shadow-md sticky top-0 z-50' : ''}
            `}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Frame 2.svg"
                alt="Godara Logo"
                height={89}
                width={80}
                className="h-[50px] w-[55px] md:w-auto md:h-20" // Keeping the logo size as is
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`
                    font-['Inter'] 
                    text-base 
                    transition-all 
                    duration-300
                    no-underline 
                    hover:underline
                    nav-link
                    ${index % 2 !== 0 ? 'mx-11' : ''}
                    ${isActive(link.href) 
                      ? 'active bg-clip-text text-transparent nav-link-gradient' 
                      : 'text-[#603812]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Custom Hamburger Menu Button (Mobile) */}
            <div className="relative lg:hidden" ref={menuRef}>
              <button 
                className="flex items-center justify-center w-16 h-16 p-3 focus:outline-none" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  // X icon when menu is open
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#603812" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  // Custom hamburger icon when menu is closed
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
                    <path d="M26.5225 11.1472H1.15315C0.516613 11.1472 0 10.6306 0 9.99409C0 9.35755 0.516613 8.84094 1.15315 8.84094H26.5225C27.1591 8.84094 27.6757 9.35755 27.6757 9.99409C27.6757 10.6306 27.1591 11.1472 26.5225 11.1472ZM26.5225 2.30631H1.15315C0.516613 2.30631 0 1.78969 0 1.15315C0 0.516613 0.516613 0 1.15315 0H26.5225C27.1591 0 27.6757 0.516613 27.6757 1.15315C27.6757 1.78969 27.1591 2.30631 26.5225 2.30631ZM26.5225 19.9879H1.15315C0.516613 19.9879 0 19.4713 0 18.8347C0 18.1982 0.516613 17.6816 1.15315 17.6816H26.5225C27.1591 17.6816 27.6757 18.1982 27.6757 18.8347C27.6757 19.4713 27.1591 19.9879 26.5225 19.9879Z" fill="#603812"/>
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <div className="py-2">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        className={`
                          block px-4 py-3 font-['Inter'] hover:bg-gray-50 no-underline hover:underline
                          nav-link
                          ${isActive(link.href) 
                            ? 'active bg-clip-text text-transparent nav-link-gradient' 
                            : 'text-[#603812]'
                          }
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
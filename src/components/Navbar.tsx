'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    { href: '/philanthropy', label: 'Philanthropy' },
    { href: '/group-companies', label: 'Group Companies' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="mt-6 sm:mt-8 md:mt-10 border-t border-b border-[#603812] border-solid">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <nav 
          className={`
            w-full 
            flex 
            items-center 
            justify-between 
            h-20
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
              src="/godara-logo.svg"
              alt="Godara Logo"
              height={44}
              width={177}
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`
                  text-[#603812] 
                  font-['Inter'] 
                  text-base 
                  transition-colors 
                  duration-300
                  hover:text-[#8B572A] 
                  no-underline 
                  hover:underline
                  ${index % 2 !== 0 ? 'mx-11' : ''}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="relative lg:hidden" ref={menuRef}>
            <button 
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-[#603812] transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#603812] mt-1.5 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#603812] mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <div className="py-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="block px-4 py-3 text-[#603812] font-['Inter'] hover:bg-gray-50 no-underline hover:underline"
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
  );
}
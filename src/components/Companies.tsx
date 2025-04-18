'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Companies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Company logos data
  const companyLogos = [
    { src: "/4.png", alt: "African" },
    { src: "/5.png", alt: "GLM" },
    { src: "/6.png", alt: "SG" },
    { src: "/1.png", alt: "Prestige" },
    // Duplicate images for infinite scroll effect
    { src: "/4.png", alt: "African" },
    { src: "/5.png", alt: "GLM" },
    { src: "/6.png", alt: "SG" },
    { src: "/1.png", alt: "Prestige" }
  ];

  // Setup infinite scrolling for mobile
  useEffect(() => {
    const handleInfiniteScroll = () => {
      if (!scrollRef.current || !isScrolling) return;
      
      const container = scrollRef.current;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // Jump back to start when reached halfway
        container.scrollLeft = 0;
      } else {
        // Continuously scroll
        container.scrollLeft += 1;
      }
    };

    // Only auto-scroll on mobile
    const checkMobile = () => {
      setIsScrolling(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    
    // Handle window resize
    window.addEventListener('resize', checkMobile);

    // Setup the animation interval
    const scrollInterval = setInterval(handleInfiniteScroll, 20);
    
    return () => {
      clearInterval(scrollInterval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isScrolling]);

  return (
    <div className="border-t border-b border-[#603812]">
      {/* Heading */}
      <div className="pt-16 md:pt-24 pb-8 md:pb-12 flex justify-center items-center">
        <h2 className="font-['Libre_Baskerville'] text-3xl md:text-4xl lg:text-[44px] leading-tight">
          <span className="bg-clip-text text-transparent font-bold" 
            style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }}>
            Our <span className="italic">Companies</span>
          </span>
        </h2>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex flex-row justify-center items-center gap-6 px-4 md:px-8 lg:px-24 xl:px-[150px] pb-16 md:pb-24">
        {companyLogos.slice(0, 4).map((logo, index) => (
          <div key={index} className="flex-1 flex justify-center items-center">
            <div className="relative w-full h-auto aspect-[348/200]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile infinite scroll */}
      <div 
        ref={scrollRef}
        className="md:hidden mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] flex overflow-x-auto scrollbar-hide pb-16 gap-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-8">
          {companyLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[250px]"
            >
              <div className="relative w-full h-auto aspect-[348/200]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="250px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
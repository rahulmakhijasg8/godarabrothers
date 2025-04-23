'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";

export default function Companies() {
  // Base company logos data
  const companyLogos = [
    { src: "/4.png", alt: "African" },
    { src: "/5.png", alt: "GLM" },
    { src: "/6.png", alt: "SG" },
    { src: "/1.png", alt: "Prestige" },
    { src: "/NE-removebg-preview (1).png", alt: "New Electronics" },
    { src: "/GARS.png", alt: "GARS" },
    { src: "/nthlogo.png", alt: "NTH" },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!container || !scrollContainer) return;

    // Total width of all logos including margins
    const logoTotalWidth = Array.from(container.children).reduce((total, child) => 
      total + (child as HTMLElement).offsetWidth, 0);

    // Container visible width
    const containerWidth = scrollContainer.clientWidth;

    // Track animation frame
    let animationFrameId: number;

    const animate = () => {
      // Smooth scroll speed (adjust as needed)
      const scrollSpeed = 2;

      setScrollProgress(prev => {
        const nextProgress = prev + scrollSpeed;

        // Stop when the last logo completely leaves the screen
        if (nextProgress >= logoTotalWidth - containerWidth) {
          return logoTotalWidth - containerWidth;
        }

        return nextProgress;
      });

      // Continue animation if not finished
      if (scrollProgress < logoTotalWidth - containerWidth) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="border-t border-b border-[#CFC3B8] md:border-[#603812]">
      {/* Heading */}
      <div className="pt-16 md:pt-24 pb-8 md:pb-12 flex justify-center items-center">
        <h2 className="font-['Libre_Baskerville'] w-full text-center text-3xl md:text-4xl lg:text-[44px]">
          <span 
            className="bg-clip-text font-['Libre_Baskerville'] w-full font-[700] text-transparent" 
            style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }}
          >
            Our <span className="italic font-['Libre_Baskerville'] w-full font-[400]">Companies</span>
          </span>
        </h2>
      </div>

      {/* Scrolling container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] pb-16 md:pb-24"
      >
        <div 
          ref={containerRef}
          className="flex"
          style={{ 
            transform: `translateX(-${scrollProgress}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div 
              key={`logo-${index}`} 
              className="flex-shrink-0 w-[220px] md:w-[250px] mr-6 md:mr-8"
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
    </div>
  );
}
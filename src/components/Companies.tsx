'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Companies() {
  // Base company logos data
  const companyLogos = [
    { src: "/nthlogo.png", alt: "NTH", width: 170, height: 70 },
    { src: "/1.png", alt: "Prestige", width: 220, height: 150 },
    { src: "/6.png", alt: "SG", width: 220, height: 130 },
    { src: "/4.png", alt: "African", width: 220, height: 140 },
    { src: "/5.png", alt: "GLM", width: 220, height: 120 },
    { 
      src: "/NE-removebg-preview (1).png", 
      alt: "New Electronics", 
      width: 170, 
      height: 70,
      extraMargin: true // Add a flag for extra margin
    },
    { 
      src: "/GARS.png", 
      alt: "GARS", 
      width: 220, 
      height: 120,
      extraMargin: true // Add a flag for extra margin
    },
    { 
      src: "/nadco-logo.jpeg", 
      alt: "Nadco", 
      width: 170, 
      height: 70,
      extraMargin: true // Add a flag for extra margin
    },
    { 
      src: "/lightech-logo-v1-Photoroom.png", 
      alt: "Lightech", 
      width: 170, 
      height: 70,
      extraMargin: true // Add a flag for extra margin
    }
  ];

  // Create multiple sets of logos to ensure smooth scrolling
  const loopedLogos = [...Array(10)].flatMap(() => companyLogos);

  return (
    <div className="border-t border-b border-[#CFC3B8] md:border-[#603812]">
      {/* Heading */}
      <div className="pt-16 md:pt-24 pb-8 md:pb-12 flex justify-center items-center">
        <h2 className="w-full text-center text-3xl md:text-4xl lg:text-[44px]">
          <span 
            className="bg-clip-text font-['Libre_Baskerville'] w-[110%] font-[700] text-transparent" 
            style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }}
          >
            Our <span style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }} className="italic font-['Libre_Baskerville'] w-[101%] bg-clip-text text-transparent font-[400]">Companies</span>
          </span>
        </h2>
      </div>

      {/* Scrolling container with Framer Motion */}
      <div className="overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] pb-16 md:pb-24">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: `-${companyLogos.length * 280}px` }} // Approximate width of one set of logos
          transition={{
            duration: 60, // Duration in seconds
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {loopedLogos.map((logo, index) => (
            <div 
              key={`logo-${index}`} 
              className={`flex-shrink-0 flex items-center justify-center ${logo.extraMargin ? 'mr-6 md:mr-24' : 'mr-6 md:mr-8'}`}
              style={{ 
                width: logo.width, 
                height: 200 // Fixed container height for consistent row height
              }}
            >
              <div 
                className="relative"
                style={{ 
                  width: logo.width, 
                  height: logo.height 
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes={`${logo.width}px`}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
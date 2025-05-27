"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageGridSection() {
  // Array of image sets - each set contains 4 images
  const imageSets = [
    // Set 1 - Original images
    [
      {
        src: "/image.png",
        alt: "Port and Shipping Operations",
        width: 384,
        height: 516
      },
      {
        src: "/image1.png",
        alt: "Fine Furniture and Woodcraft",
        width: 334,
        height: 516,
        marginTop: true
      },
      {
        src: "/image3.png",
        alt: "Commercial Properties",
        width: 384,
        height: 516
      },
      {
        src: "/image4.png",
        alt: "Cosmetics and Beauty Products",
        width: 284,
        height: 516,
        marginTop: true
      }
    ],
    // Set 2 - Second set of images
    [
      {
        src: "/Rectangle 26.png", // Replace with your actual image paths
        alt: "Retail & Distribution",
        width: 384,
        height: 516
      },
      {
        src: "/hotel.png",
        alt: "Hotel",
        width: 334,
        height: 516,
        marginTop: true
      },
      {
        src: "/education.png",
        alt: "Education",
        width: 384,
        height: 516
      },
      {
        src: "/electronics.png",
        alt: "Electronics",
        width: 284,
        height: 516,
        marginTop: true
      }
    ],
    // Set 3 - Third set of images
    [
      {
        src: "/mining.png", // Replace with your actual image paths
        alt: "Construction Site",
        width: 384,
        height: 516
      },
      {
        src: "/transport.png",
        alt: "Transport",
        width: 334,
        height: 516,
        marginTop: true
      },
      {
        src: "/construction.png",
        alt: "Construction & Hardware",
        width: 384,
        height: 516
      },
      {
        src: "/mining_copper.png",
        alt: "Mining of Copper Cathode",
        width: 284,
        height: 516,
        marginTop: true
      }
    ],

    [
      {
        src: "/drilling.png", // Replace with your actual image paths
        alt: "Drilling",
        width: 384,
        height: 516
      },
      {
        src: "/automobiles.png",
        alt: "Automobiles",
        width: 334,
        height: 516,
        marginTop: true
      },
      {
        src: "/event_management.png",
        alt: "Event Management",
        width: 384,
        height: 516
      },
      {
        src: "/general_trading.png",
        alt: "General Trading",
        width: 284,
        height: 516,
        marginTop: true
      }
    ]
    // Add more sets as needed
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // After fade out, change images
      setTimeout(() => {
        setCurrentSetIndex((prevIndex) => 
          (prevIndex + 1) % imageSets.length
        );
        setIsTransitioning(false);
      }, 300); // Half of transition duration
      
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [imageSets.length]);

  const currentImages = imageSets[currentSetIndex];

  return (
    <section className="pb-[10px] md:pb-0 w-full relative overflow-x-hidden">
      {/* Image grid container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[100px] relative">
        <div className="flex gap-1 md:gap-2 min-[451px]:max-[639px]:h-[250px] lg:gap-6 h-[155px] sm:h-[220px] md:h-[450px] md:overflow-hidden pb-4 md:pb-0 px-2 md:mx-0 md:px-7 lg:px-14">
          {currentImages.map((image, index) => (
            <div 
              key={`${currentSetIndex}-${index}`} // Key includes set index for proper re-rendering
              className={`relative w-1/4 h-[140px] min-[451px]:max-[639px]:h-[230px] sm:h-[205px] md:h-[400px] overflow-hidden transition-opacity duration-600 ease-in-out ${
                image.marginTop ? 'mt-[15px] md:mt-[50px]' : ''
              } ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-[6px] md:rounded-[14px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
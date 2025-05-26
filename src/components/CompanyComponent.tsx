"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeatureSectionProps {
  sectionTitle: string;
  subtitle: string;
  sectionTitleLink?: string; // Optional link for the section title
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean;
  objectFit?: string; // Allow any string value
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionTitle,
  subtitle,
  sectionTitleLink,
  description,
  imageSrc,
  imageAlt,
  reverseLayout = false,
  objectFit = "cover", // Default to cover
}) => {
  // Check if image source is provided
  const hasImageSrc = imageSrc && imageSrc.trim() !== "";
  
  // Add image extension validation only if image source is provided
  const validImageExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif', '.avif'];
  const hasValidExtension = hasImageSrc && validImageExtensions.some(ext => 
    imageSrc.toLowerCase().endsWith(ext)
  );

  // Generate the object-fit class based on the prop
  const getObjectFitClass = () => {
    if (objectFit === "cover") return "object-cover";
    if (objectFit === "contain") return "object-contain";
    if (objectFit === "fit") return "object-fit";
    // For any other string value, use it as a direct class
    return `object-${objectFit}`;
  };

  return (
    <>
      <div className="mt-6 md:mt-24">
        <div className="relative mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] py-12 md:py-11.5">
          <div className={`flex flex-col mx-auto ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            {/* Content section */}
            <div className={`w-full md:w-[65%] pl-4 ${reverseLayout ? 'md:pl-12' : 'md:pl-6'} md:mb-12 pb-6 md:mb-0 sm:px-6`}>
              <h3 className="text-[24px] mb-6 text-left">
                {sectionTitleLink ? (
                  <Link href={sectionTitleLink} target="_blank" passHref>
                    <span
                      className="font-['Libre_Baskerville'] font-[700] bg-clip-text text-transparent pr-2 cursor-pointer"
                      style={{
                        backgroundImage:
                          "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                      }}
                    >
                      {sectionTitle}
                    </span>
                  </Link>
                ) : (
                  <span
                    className="font-['Libre_Baskerville'] font-[700] pr-2 bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }}
                  >
                    {sectionTitle}
                  </span>
                )}
              </h3>
          
              <h4 className="text-[#603812] font-['Roboto'] text-[16px] md:text-[18px] font-[400] leading-[28px] capitalize mb-5">
                <span className="font-['Roboto']">{subtitle}</span>
              </h4>

              <p className="text-[#8b7e66] pr-2 md:pr-5 font-['Roboto'] font-[300] text-[14px] italic leading-[24px]">
                {description}
              </p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-2/5">
              <div className="w-full z-[10] h-[300px] md:h-[300px]">
                {/* Gray background - always show this */}
                <div
                  className={`absolute ${
                    reverseLayout
                      ? 'left-0 '
                      : 'right-0'
                  } w-[60%] md:w-[30%] h-[330px] md:h-[410px] bg-[#EFEBE7] 
                    bottom-0`}
                ></div>

                {/* Image container - only show if imageSrc is provided */}
                {hasImageSrc && hasValidExtension && (
                  <div
                    className={`absolute mt-12 bottom-[0] md:mt-0 md:bottom-[50px] ${
                      reverseLayout
                        ? 'left-0 '
                        : 'right-0'
                    } w-[95%] md:w-[40%] h-[31%] md:h-[77%]`}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 768px) 90vw, 40vw"
                      className={`object-cover md:${getObjectFitClass()}`}
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full width border - separate from the content */}
      <div className="w-full h-[1px] bg-[#CFC3B8] md:bg-[#603812]"></div>
    </>
  );
};

export default FeatureSection;
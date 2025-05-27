import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListItem {
  title: string;
  description: string;
}

interface BeforeAfterImages {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

interface FeatureSectionProps {
  sectionTitle: string;
  sectionTitleLink?: string; // Optional link for the section title
  listItems: ListItem[];
  imageSrc?: string; // Made optional
  imageAlt?: string; // Made optional
  beforeAfterImages?: BeforeAfterImages; // New prop for before/after images
  reverseLayout?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionTitle,
  sectionTitleLink,
  listItems,
  imageSrc,
  imageAlt,
  beforeAfterImages,
  reverseLayout = false,
}) => {

  return (
    <div className="relative border-b md:border-b border-[#CFC3B8] md:border-[#603812] mt-0 md:mt-0">
      <div className="max-w mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 md:py-30">

        <div className={`flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {/* Content section */}
          <div className={`w-full md:w-3/5 ${reverseLayout ? 'md:pl-12' : 'md:pr-12'} mb-12 ${beforeAfterImages ? 'pb-[650px]' : 'pb-80'} md:pb-0 md:mb-0 px-4 sm:px-6 md:px-8`}>
            <h3 className="font-['Libre_Baskerville'] text-xl mb-6 text-left">
              {sectionTitleLink ? (
                <Link href={sectionTitleLink} target="_blank" passHref>
                  <span
                    className="bg-clip-text text-transparent cursor-pointer"
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
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                  }}
                >
                  {sectionTitle}
                </span>
              )}
            </h3>

            <ul className="space-y-5 text-[#A08871] font-['Roboto'] font-[400]">
              {listItems.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-[#c9a750] mr-3 text-lg">•</span>
                  <div>
                    <span className="font-[500] font-['Roboto'] text-[#603812]">{item.title}</span> {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image section */}
          <div className="w-full md:w-2/5">
            <div className="w-full z-[10] h-full md:h-[300px]">
              {/* Grey Background */}
              <div
                className={`absolute ${
                  reverseLayout
                    ? 'left-0 md:left-0'
                    : 'right-0 md:right-0'
                } w-[50%] md:w-[30%] ${beforeAfterImages ? 'h-[690px]' : 'h-[320px]'} bottom-0 md:top-0 mx-4 md:mt-0 sm:mx-6 md:mx-8 lg:mx-[100px] md:h-full bg-[#e8e8e0]`}
              ></div>

              {/* Conditional rendering: Before/After or Single Image */}
              {beforeAfterImages ? (
                // Before/After Images
                <div
                  className={`absolute mt-12 bottom-0 md:mt-0 ${
                    reverseLayout
                      ? 'left-0 md:left-0'
                      : 'right-0 md:right-0'
                  } w-[90%] md:w-[35%] md:top-[0%] z-10 mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] h-[65%] md:h-[100%]`}
                >
                  <div className="flex flex-col h-full space-y-3">
                    {/* Before Image */}
                    <div className="flex-1 relative">
                      <div className="absolute top-2 left-2 z-20">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Before
                        </span>
                      </div>
                      <div className="h-full relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-out">
                        <Image
                          src={beforeAfterImages.beforeSrc}
                          alt={beforeAfterImages.beforeAlt}
                          fill
                          sizes="(max-width: 768px) 90vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="flex-1 relative">
                      <div className="absolute top-2 left-2 z-20">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          After
                        </span>
                      </div>
                      <div className="h-full relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-out">
                        <Image
                          src={beforeAfterImages.afterSrc}
                          alt={beforeAfterImages.afterAlt}
                          fill
                          sizes="(max-width: 768px) 90vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Single Image (original functionality)
                imageSrc && (
                  <div
                    className={`absolute mt-12 bottom-0 md:mt-0 ${
                      reverseLayout
                        ? 'left-0 md:left-0'
                        : 'right-0 md:right-0'
                    } w-[90%] md:w-[35%] md:top-[15%] z-10 mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] h-[250px] md:h-[70%] overflow-hidden hover:scale-105 transition-transform duration-300 ease-out`}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt || ''}
                      fill
                      sizes="(max-width: 768px) 90vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
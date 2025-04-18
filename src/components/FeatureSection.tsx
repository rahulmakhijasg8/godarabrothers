import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  sectionTitle: string;
  sectionTitleLink?: string; // Optional link for the section title
  listItems: ListItem[];
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionTitle,
  sectionTitleLink,
  listItems,
  imageSrc,
  imageAlt,
  reverseLayout = false,
}) => {

  return (
    <div className="border-b md:border-b border-[#603812] mt-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-12 md:py-11.5">

        <div className={`flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {/* Content section */}
          <div className={`w-full md:w-3/5 ${reverseLayout ? 'md:pl-12' : 'md:pr-12'} mb-12 md:mb-0 px-4 sm:px-6 md:px-8`}>
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

            <ul className="space-y-5 text-[#8b7e66]">
              {listItems.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-[#c9a750] mr-3 text-lg">•</span>
                  <div>
                    <span className="font-medium">{item.title}</span> {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image section */}
          <div className="w-full md:w-2/5 relative">
            <div className="relative w-full z-[10] bottom-[10px] h-[300px] md:h-[300px]">
              {/* Gray background */}
              <div
                className={`absolute ${
                  reverseLayout
                    ? 'right-0 md:right-2/5 md:left-0'
                    : ' md:right-0'
                } w-[50%] md:w-[65%] h-[349px] bottom-[300px] md:h-[440px] bg-[#e8e8e0] top-2 md:-top-[84px]`}
              ></div>

              {/* Image */}
              <div
                className={`absolute mt-12 top-[40px] md:top-0 md:mt-0 md:bottom-[10px] ${
                  reverseLayout
                    ? 'right-0 md:right-1/10 md:left-0'
                    : 'left-0 md:left-1/10 md:right-0'
                } w-[95%] md:w-[90%] h-[90%]`}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
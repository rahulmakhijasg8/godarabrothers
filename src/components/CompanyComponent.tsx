import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeatureSectionProps {
  sectionTitle: string;
  subtitle: string,
  sectionTitleLink?: string; // Optional link for the section title
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionTitle,
  subtitle,
  sectionTitleLink,
  description,
  imageSrc,
  imageAlt,
  reverseLayout = false,
}) => {

  return (
    <>
      <div className="mt-6 md:mt-24">
        <div className="max-w-[1440px] relative mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] py-12 md:py-11.5">
          <div className={`flex flex-col mx-auto ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            {/* Content section */}
            <div className={`w-full md:w-[65%] pl-4 ${reverseLayout ? 'md:pl-12' : 'md:pl-6'} mb-12 pb-6 md:mb-0 sm:px-6`}>
              <h3 className="font-['Libre_Baskerville'] text-[24px] mb-6 text-left">
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
          
              <h4 className="text-[#603812] font-['Roboto'] text-[16px] md:text-[18px] font-[400] leading-[28px] capitalize mb-5">
                {subtitle}
              </h4>

              <p className="text-[#8b7e66] font-['Roboto'] font-[300] text-[14px] italic leading-[24px]">
                {description}
              </p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-2/5">
              <div className="w-full z-[10] h-[300px] md:h-[300px]">
                {/* Gray background */}
                <div
                  className={`absolute ${
                    reverseLayout
                      ? 'left-0 '
                      : 'right-0'
                  } w-[60%] md:w-[30%] h-[380px] md:h-[410px] bg-[#EFEBE7] 
                    bottom-0`}
                ></div>

                {/* Image */}
                <div
                  className={`absolute mt-12 bottom-[0] md:mt-0 md:bottom-[50px] ${
                    reverseLayout
                      ? 'left-0 '
                      : 'right-0'
                  } w-[95%] md:w-[40%] h-[37.3%] md:h-[77%]`}
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
      
      {/* Full width border - separate from the content */}
      <div className="w-full h-[1px] bg-[#603812]"></div>
    </>
  );
};

export default FeatureSection;
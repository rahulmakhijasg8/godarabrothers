import Image from 'next/image';
import React from 'react';

interface IndustryCardProps {
  title: string;
  image: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ title, image }) => {
  return (
    <>
      <div className={`absolute w-[80%] -top-5 md:-top-3 md:w-[70%] h-[250px] md:h-[200px] bg-[#EFEBE7] 
                    `}></div>
      <div className="relative w-[100%] md:w-[100%] z-[10] h-56 sm:h-60 md:h-52 lg:h-56">
        <Image
          src={image}
          alt={title}
          height={500}
          width={500}
          className="object-cover transition-all duration-300 ease-out hover:scale-105 hover:shadow-md"
          priority
        />
      </div>
      <div className="text-center text-[#A08871] text-lg font-normal mt-10 mb-8 md:mb-0 md:mt-0">
        {title}
      </div>
    </>
  );
};

export default IndustryCard;
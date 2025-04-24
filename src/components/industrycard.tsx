import Image from 'next/image';
import React from 'react';

interface IndustryCardProps {
  title: string;
  image: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ title, image }) => {
  return (
    <>
      <div className={`absolute w-[60%] hidden md:block md:top-0 md:w-[70%] h-[380px] md:h-[200px] bg-[#EFEBE7] 
                    bottom-30`}></div>
      <div className="relative w-full z-[10] h-56 sm:h-60 md:h-52 lg:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-all duration-300 ease-out hover:scale-105 hover:shadow-md"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 323px"
          priority
        />
      </div>
      <div className="text-center text-[#A08871] text-lg font-normal mt-6">
        {title}
      </div>
    </>
  );
};

export default IndustryCard;
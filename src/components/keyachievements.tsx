import React from 'react';

// Define the type for achievement points
export interface AchievementPoint {
  title: string;
  description: string;
}

// Define props interface for the component
interface KeyAchievementsProps {
  achievementPoints: AchievementPoint[];
}

export default function KeyAchievements({ achievementPoints }: KeyAchievementsProps) {
  return (
    <div className="mt-12 md:mt-0 border-t border-b border-[#CFC3B8] md:border-[#603812] flex flex-col">
      {/* Heading */}
      <div className="text-center mt-10 md:mt-[100px] mb-12 md:mb-10 px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <h2 
          className="text-[24px] md:text-[36px] leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          <span className="font-['Libre_Baskerville'] font-[700]">Key</span>{" "}
          <span className="italic font-['Libre_Baskerville'] inline-block font-[400]">Achievements</span>
        </h2>
      </div>

      {/* Numbered points */}
      <div className="px-4 sm:px-6 md:mt-[60px] md:px-8 lg:px-[100px] mb-12">
        <div className="space-y-6 pl-5 md:pl-10 md:space-y-1">
          {achievementPoints.map((point, index) => (
            <div key={index} className="flex items-start pr-2 mb-8 md:mb-[28px]">
              {/* Number instead of dot */}
              <span className="font-['Libre_Baskerville'] text-[#603812] font-[700] text-[18px] md:text-[22px] mr-4 mt-1/2">
                {index + 1}.
              </span>
              
              <div className="flex flex-col">
                {/* Title with Libre Baskerville font and #603812 color */}
                <span className="font-['Libre_Baskerville'] text-[#603812] font-[700] text-[18px] md:text-[22px]">
                  {point.title}
                </span>
                
                {/* Description with Roboto font and #A08871 color */}
                <span className="mt-2 pr-2 md:pr-8 md:mt-1 text-[16px] md:text-[18px] font-['Roboto'] text-[#A08871]">
                  {point.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
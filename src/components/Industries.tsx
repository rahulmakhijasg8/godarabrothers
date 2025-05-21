import { useState } from "react";
import IndustryCard from "./industrycard";

export default function Industries() {
  const [showAll, setShowAll] = useState(false);
  
  // Industry data - only industry cards, no heading
  const allIndustries = [
    { image: "/general_trading.svg", title: "General Trading" },
    { image: "/Rectangle 23.png", title: "Purified Water and Speciality Bevarages" },
    { image: "/Rectangle 26.png", title: "Retail & Distribution" },
    { image: "/Rectangle 24.png", title: "Cosmetics Trading" },
    { image: "/Rectangle 25.png", title: "Import-Export" },
    { image: "/hotel.svg", title: "Hotel & Resort" },
    // Additional industries
    { image: "/mining.svg", title: "Mining" },
    { image: "/transport.svg", title: "Transport" },
    { image: "/construction.svg", title: "Construction & Hardware" },
    { image: "/electronics.svg", title: "Electronics" },
    { image: "/furniture.svg", title: "Furntiure" },
    { image: "/mining_copper.svg", title: "Mining of copper cathode" },
    { image: "/drilling.svg", title: "Drilling and bore well" },
    { image: "/automobiles.svg", title: "Automobiles" },
    { image: "/education.svg", title: "Education" },
    { image: "/event_management.svg", title: "Evenet Management" }
  ];

  // Show only first 5 industry cards initially, or all when showAll is true
  const industries = showAll ? allIndustries : allIndustries.slice(0, 6);

  return (
    <div className="my-8 border-t border-[#CFC3B8] md:border-[#603812] md:my-12 px-4 sm:px-6 md:px-8 lg:px-[100px]">
      {/* Separate heading above the grid */}
      <div className="text-center mt-25 mb-14 md:mt-30 md:mb-20">
        <h2 className="text-2xl md:text-4xl">
          <span className="bg-clip-text font-['Libre_Baskerville'] font-700 text-transparent font-bold" 
            style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }}>
            Industries We<span className="font-['Libre_Baskerville'] text-left font-[400] italic"> Operate In</span>
          </span>
        </h2>
      </div>

      {/* Grid with industry cards only */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {industries.map((industry, index) => (
          <div 
            key={index}
            className="flex flex-col items-center relative p-4 md:p-8 md:pt-6 min-h-[300px]"
          >
            <IndustryCard title={industry.title} image={industry.image!} />
          </div>
        ))}
      </div>
      
      {/* See More / See Less button */}
      <div className="flex justify-center mt-6 mb-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[#603812] font-['Roboto'] text-sm underline font-medium"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
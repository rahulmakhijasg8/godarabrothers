import { useState, useMemo, useEffect } from "react";
import IndustryCard from "./industrycard";

export default function Industries() {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Industry data - only industry cards, no heading
  const allIndustries = [
    { image: "/general_trading.png", title: "General Trading" },
    { image: "/Rectangle 23.png", title: "Purified Water and Speciality Bevarages" },
    { image: "/Rectangle 26.png", title: "Retail & Distribution" },
    { image: "/Rectangle 24.png", title: "Cosmetics Trading" },
    { image: "/Rectangle 25.png", title: "Import-Export" },
    { image: "/hotel.png", title: "Hotel & Resort" },
    // Additional industries
    { image: "/mining.png", title: "Mining" },
    { image: "/transport.png", title: "Transport" },
    { image: "/construction.png", title: "Construction & Hardware" },
    { image: "/electronics.png", title: "Electronics" },
    { image: "/furniture.svg", title: "Furniture" }, // Fixed typo
    { image: "/mining_copper.png", title: "Mining of copper cathode" },
    { image: "/drilling.png", title: "Drilling and bore well" },
    { image: "/automobiles.png", title: "Automobiles" },
    { image: "/education.png", title: "Education" },
    { image: "/event_management.png", title: "Event Management" } // Fixed typo
  ];

  // Preload images when component mounts (for better performance)
  useEffect(() => {
    // Preload all images in the background
    allIndustries.forEach((industry) => {
      const img = new Image();
      img.src = industry.image;
    });
  }, []);

  // Show only first 6 industry cards initially, or all when showAll is true
  const industries = useMemo(() => {
    return showAll ? allIndustries : allIndustries.slice(0, 6);
  }, [showAll, allIndustries]);

  // Function to determine if an item should be centered (when it's the only item in the last row)
  const getItemGridColumn = (index: number, totalItems: number): string => {
    const itemsInLastRow: number = totalItems % 3;
    const isLastRow: boolean = index >= totalItems - itemsInLastRow;
    const isOnlyItemInLastRow: boolean = itemsInLastRow === 1 && isLastRow;
    
    if (isOnlyItemInLastRow) {
      return "md:col-start-2"; // Start at the second column (center position)
    }
    return "";
  };

  const handleToggleShow = () => {
    if (!showAll) {
      setIsLoading(true);
      // Add a small delay to show loading state
      setTimeout(() => {
        setShowAll(true);
        setIsLoading(false);
      }, 300);
    } else {
      setShowAll(false);
    }
  };

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
            key={`${industry.image}-${index}`} // More stable key
            className={`flex flex-col items-center relative p-4 md:p-8 md:pt-6 min-h-[300px] transition-opacity duration-300 ${
              showAll && index >= 6 ? 'animate-fadeIn' : ''
            } ${getItemGridColumn(index, industries.length)}`}
          >
            <IndustryCard 
              title={industry.title} 
              image={industry.image}
            />
          </div>
        ))}
      </div>
      
      {/* Loading state for new cards */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[...Array(10)].map((_, index) => (
            <div 
              key={`skeleton-${index}`}
              className="flex flex-col items-center relative p-4 md:p-8 md:pt-6 min-h-[300px]"
            >
              <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* See More / See Less button */}
      <div className="flex justify-center mt-6 mb-4">
        <button
          onClick={handleToggleShow}
          disabled={isLoading}
          className={`text-[#603812] font-['Roboto'] text-sm underline font-medium transition-opacity ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
          }`}
        >
          {isLoading ? "Loading..." : showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
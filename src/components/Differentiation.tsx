import React from "react";

interface ListItem {
  title: string;
  description: string;
}

interface ColumnData {
  sectionTitle: string;
  listItems: ListItem[];
}

interface FeatureSectionProps {
  mainTitle: string;
  leftColumn: ColumnData;
  rightColumn: ColumnData;
}

const FeaturedSection: React.FC<FeatureSectionProps> = ({
  mainTitle,
  leftColumn,
  rightColumn,
}) => {
  const titleParts = mainTitle.split(" ");
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(" ");

  const renderContentBlock = (columnData: ColumnData, hasBackground: boolean) => (
    <div className="w-full md:w-1/2 h-full md:h-full md:mt-0 mb-12 md:mb-0">
      <div
        className={`h-full w-full text-center ${
          hasBackground ? "bg-[#EFEBE7]" : ""
        } flex flex-col justify-center py-12`}
      >
        <h3 className="font-['Libre_Baskerville'] font-[700] md:pt-[50px] text-[26px] mb-6">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
            }}
          >
            {columnData.sectionTitle}
          </span>
        </h3>

        <ul className="space-y-1 text-left md:px-16 font-['Roboto'] text-[#A08871] font-[400] leading-[34px]">
          {columnData.listItems.map((item, index) => (
            <li key={index} className="flex">
              <span className="text-[#c9a750] mr-3 text-lg">•</span>
              <div>
                <span className="font-[500] text-[#A08871]">{item.title}</span> {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="border-t hidden md:block border-[#603812] mt-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-12 md:py-0">
        {/* Main Heading */}
        <h2 className="font-['Libre_Baskerville'] md:pt-[75px] md:pb-[35px] border-b text-center text-2xl sm:text-3xl md:text-[36px] mb-10 md:mb-0">
          <span
            className="font-bold inline bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
            }}
          >
            {firstWord}
          </span>{" "}
          <span className="text-[#603812] italic font-normal">{restOfTitle}</span>
        </h2>

        <div className="flex flex-col md:flex-row items-stretch">
          {renderContentBlock(leftColumn, true)}
          {renderContentBlock(rightColumn, false)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
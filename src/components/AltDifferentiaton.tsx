import React from "react";

interface ColumnData {
  sectionTitle: string;
  paragraphText: string; // Changed from listItems to paragraphText
}

interface FeatureSectionProps {
  leftColumn: ColumnData;
  rightColumn: ColumnData;
}

const FeaturedSection: React.FC<FeatureSectionProps> = ({
  leftColumn,
  rightColumn,
}) => {
  const renderContentBlock = (columnData: ColumnData, isRightColumn: boolean) => (
    <div className="w-full md:w-1/2 h-full md:h-full md:mt-0">
      <div
        className={`h-full px-8 w-full text-center ${
          isRightColumn ? "bg-[#EFEBE7] min-h-[420px]" : ""
        } flex py-12 flex-col`}
      >
        <h3 className="font-['Libre_Baskerville'] font-[700] md:pt-[30px] text-[26px] mb-6">
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

        <p className="text-left md:px-16 font-['Roboto'] text-[#A08871] font-[400] leading-[34px]">
          {columnData.paragraphText}
        </p>
      </div>
    </div>
  );

  return (
    <div className="border-t mb-12 border-b border-[#603812] mt-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] pt-6 md:py-0">
        <div className="flex flex-col md:flex-row items-stretch">
          {renderContentBlock(leftColumn, false)}
          {renderContentBlock(rightColumn, true)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
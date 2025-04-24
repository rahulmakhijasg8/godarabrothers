export default function Stats() {
  // Stats data array for DRY code
  const statsData = [
    { value: "23+", label: "Companies" },
    { value: "$500M+", label: "Annual Revenue" },
    { value: "5+", label: "Global Markets and Growing" },
    { value: "3000+", label: "Employees" }
  ];

  return (
    <div className="my-8 md:my-12 border-t border-b border-[#CFC3B8] md:border-[#603812]">
      <div className="flex flex-col md:flex-row justify-center items-stretch px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {statsData.map((stat, index) => {
          // Special conditional for border styling
          const borderClasses = 
            index === statsData.length - 1 
              ? '' // No border for the last item
              : index < statsData.length - 1 
                ? 'border-b md:border-b-0 md:border-r border-[#CFC3B8] md:border-[#603812]' 
                : '';
                
          return (
            <div 
              key={index}
              className={`
                py-10 md:py-[132px] 
                flex-1 
                flex justify-center items-center
                ${borderClasses}
              `}
            >
              <div className="font-['Libre_Baskerville'] text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#603812]">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl text-[#A08871] font-normal pt-6">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
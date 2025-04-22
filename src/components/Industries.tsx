import IndustryCard from "./industrycard";

export default function Industries() {
  // Industry data for cleaner code
  const industries = [
    { title: "Industries We Operate In", isHeading: true },
    { image: "/Rectangle 22.png", title: "General Trading" },
    { image: "/Rectangle 23.png", title: "Purified Water and Speciality Bevarages" },
    { image: "/Rectangle 24.png", title: "Retail & Distribution" },
    { image: "/Rectangle 25.png", title: "Cosmetics Trading" },
    { image: "/Rectangle 26.png", title: "Import-Export" }
  ];

  return (
    <div className="my-12 px-4 sm:px-6 md:px-8 lg:px-[100px] border-t border-b border-[#603812]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {industries.map((industry, index) => (
          <div 
            key={index}
            className={`
              flex flex-col justify-center items-center 
              ${industry.isHeading ? 'pb-0 pt-8 px-0 md:p-12 -mb-4 md:mb-0' : 'p-8 md:p-12'}
              ${industry.isHeading ? 'min-h-[160px] md:min-h-[300px]' : 'min-h-[300px]'}
              ${index !== industries.length - 1 && index % 3 !== 2 ? 'md:border-r' : ''} 
              ${index < 3 ? 'md:border-b' : ''} 
              border-[#603812]
            `}
          >
            {industry.isHeading ? (
              <h2 className="font-['Libre_Baskerville'] text-2xl md:text-4xl text-center">
                <span className="bg-clip-text text-transparent font-bold" 
                  style={{
                    backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
                  }}>
                  Industries We<span className="italic"> Operate In</span>
                </span>
              </h2>
            ) : (
              <IndustryCard title={industry.title} image={industry.image!} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
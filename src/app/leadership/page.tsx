import Image from "next/image";
import FeaturedSection from "@/components/AltDifferentiaton";

export default function Home() {
  return (
    <div>
    <section className="text-center border-[#CFC3B8] md:border-[#603812] border-b-[1px] px-4 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 
          className="font-['Libre_Baskerville'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight"
        >
          <span 
            className="font-bold block mb-2 md:mb-0 md:inline bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }}
          >
            Leadership
          </span>
          <span className="hidden md:inline font-normal mx-2">—</span>
          <span className="font-normal italic block mt-1 md:mt-0 md:inline">Meet Our Visionaries</span>
        </h1>
        
        <p className="text-[#8b7e66] text-base sm:text-lg md:text-xl mt-4 md:mt-6 mb-8">
        At Godara Brothers, our leadership embodies a legacy of excellence, strategic growth, and unwavering commitment to success. Meet the visionaries who have built a diversified business empire spanning multiple industries and countries.
        </p>
      </div>
    </section>
    <div className="mt-6 border-t border-b md:mt-24">
        <div className="max-w-[1440px] relative mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] py-12 md:py-11.5">
          <div className='flex flex-col md:flex-row mx-auto'>
            {/* Content section */}
            <div className={`w-full md:mt[100px] md:w-[65%] pl-4 pt-[30px] pb-[60px] md:pt-[160px] md:pb-[90px] `}>
              <h3 className="font-['Libre_Baskerville'] text-[24px] mb-1 text-left">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }}
                  >
                    Mr. Nawal Kishore
                  </span>
              </h3>
          
              <h4 style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }} 
              className="font-['Roboto'] bg-clip-text text-transparent text-[16px] md:text-[18px] font-[400] leading-[28px] capitalize mb-2">
                Founder & Visionary Leader
              </h4>

              <p className="text-[#8b7e66] font-['Roboto'] pr-[10px] md:pr-[90px] mb-[120px] font-[300] text-[14px] italic leading-[24px]">
                With a strong background in international business and strategic investments, Mr. Nawal Kishore has been instrumental in transforming Godara Brothers into a diversified conglomerate. His leadership has steered multiple businesses toward sustained growth and industry leadership.
              </p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-[35%] md:h-[100%]">
              <div className="md:right-0 md:w-[35%] z-[10] h-[300px] md:h-[300px]">
                {/* Gray background */}
                <div
                  className={`absolute w-[60%] right-0 md:top-0  md:w-[30%] h-[380px] md:h-[200px] bg-[#EFEBE7] 
                    bottom-30`}
                ></div>

                {/* Image */}
                <div
                  className={`absolute mt-12 bottom-30  md:top-[150px] right-0 md:mt-0 w-[95%] md:w-[40%] h-[35.5%] md:h-[60%]`}
                >
                  <Image
                    src={'/naval-kishore.svg'}
                    alt='Mr. Nawal Kishore'
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 md:mt-16 md:border-t
          border-b 
          border-[#603812] 
          border-solid px-4 sm:px-6 md:px-8 lg:px-[100px] md:flex-row h-auto md:h-[350px]">
      {/* First column - Title */}
      <div className="w-full md:w-1/4 md:border-r border-[#603812] border-b md:border-b-0 text-center flex justify-center pb-6 pt-1 md:pt-16">
        <h2 
          className="font-['Libre_Baskerville'] text-center md:text-left text-2xl md:text-3xl lg:text-3xl leading-tight text-center bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          <span className="font-bold">Key</span>{" "}<br className="hidden md:block"/>
          <span className="italic">Achievements</span>
        </h2>
      </div>

      {/* Second column */}
      <div className="w-full md:w-1/4 px-[100px] border-b md:border-b-0 md:px-8 pt-8 pb-6 text-center md:pt-[60px] md:border-r border-[#603812] flex items-center">
      <p
        className="font-['Roboto'] text-base md:text-lg text-[#A08871] font-normal"
      >
        <span className="text-[#603812] font-[300] inline">Successfully expanded Godara Brothers into</span>{' '}
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          5+ global markets.
        </span>
      </p>
      </div>

      {/* Third column */}
      <div className="w-full md:w-1/4 px-[100px] md:border-b-0 md:px-8 pt-8 pb-6 border-b text-center md:pt-[60px] md:border-r border-[#603812] flex items-center">
      <p
        className="font-['Roboto'] text-base md:text-lg text-[#A08871] font-normal"
      >
        <span className="text-[#603812] font-[300] inline">Played a pivotal role in the</span>{' '}
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          growth of Ste NTH Sarl and Apex Group Int&apos;l.
        </span>
      </p>
      </div>

      {/* Fourth column */}
      <div className="w-full md:w-1/4 px-[100px] md:border-b-0 md:px-8 pt-8 pb-6 text-center md:pt-[60px] md:border-r border-[#603812] flex items-center">
      <p
        className="font-['Roboto'] text-base md:text-lg text-[#A08871] font-normal"
      >
        <span className="text-[#603812] font-[300] inline">Played a pivotal role in the</span>{' '}
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          growth of Ste NTH Sarl and Apex Group Int&apos;l.
        </span>
      </p>
      </div>
    </div>
    <div className=" border-b border-[#603812]">
  <section className="text-center px-8 py-12 md:py-24 lg:py-32 max-w-[1440px] ">
    <div className="md:px-55 mx-auto">
      <h1 
        className="font-['Libre_Baskerville'] text-2xl sm:text-3xl md:text-3xl lg:text-[36px] leading-tight"
      >
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          Business <span className="italic">Philosophy</span>
        </span>
      </h1>
      
      <p className="text-[#A08871] w-full text-center italic text-base sm:text-lg md:text-xl mt-6 md:mt-10 mb-6 text-center">
      &quot;Success is built on strong partnerships, innovative thinking, and a commitment to excellence. At Godara Brothers, we believe in creating value that lasts generations.&quot;
      </p>
    </div>
  </section>
</div>
      <div className="mt-6 border-t border-b md:mt-24">
        <div className="max-w-[1440px] relative mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] py-12 md:pt-11.5 md:pb-8">
          <div className='flex flex-col md:flex-row mx-auto'>
            {/* Content section */}
            <div className={`w-full md:mt[100px] md:hidden md:w-[65%] pl-[10px] pt-[1px] pr-[10px] pb-[140px] md:pt-[80px] md:pb-[120px] `}>
              <h3 className="font-['Libre_Baskerville'] text-[24px] mb-1">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }}
                  >
                    Mr. Teeku Singh Choudhary
                  </span>
              </h3>
          
              <h4 style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }} 
              className="font-['Roboto'] bg-clip-text text-transparent text-[16px] md:text-[18px] font-[400] leading-[28px] capitalize mb-2">
                Founder & Business Leader
              </h4>

              <p className="text-[#8b7e66] font-['Roboto'] pr-[10px]  mb-[0px] font-[300] text-[14px] italic leading-[24px]">
              A dynamic entrepreneur with decades of experience, Mr. Teeku Singh Choudhary has been a driving force in expanding the operations of Godara Brothers across diverse industries. His expertise in business operations, strategic expansion, and financial management has played a crucial role in scaling the company’s global footprint.
              </p>
            </div>
            {/* Image section */}
            <div className="w-full md:w-[35%] md:h-[100%]">
              <div className="md:right-0 md:w-[35%] z-[10] h-[300px] md:h-[300px]">
                {/* Gray background */}
                <div
                  className={`absolute w-[60%] left-0 md:bottom-[0px]  md:w-[30%] h-[280px] md:h-[200px] bg-[#EFEBE7] 
                    bottom-40`}
                ></div>

                {/* Image */}
                <div
                  className={`absolute mt-12 bottom-20  md:top-[100px] left-0 md:mt-0 w-[95%] md:w-[40%] h-[35.5%] md:h-[260]`}
                >
                  <Image
                    src={'/Rectangle 14.png'}
                    alt='Mr. Teeku Singh Choudhary'
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className=""
                  />
                </div>
              </div>
            </div>
            {/* Content section */}
            <div className={`w-full md:mt[100px] hidden md:block md:w-[65%] pl-[80px] pt-[1px] pr-[10px] pb-[140px] md:pt-[80px] md:pb-[120px] `}>
              <h3 className="font-['Libre_Baskerville'] text-[24px] mb-1">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }}
                  >
                    Mr. Teeku Singh Choudhary
                  </span>
              </h3>
          
              <h4 style={{
                      backgroundImage:
                        "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)",
                    }} 
              className="font-['Roboto'] bg-clip-text text-transparent text-[16px] md:text-[18px] font-[400] leading-[28px] capitalize mb-2">
                Founder & Business Leader
              </h4>

              <p className="text-[#8b7e66] font-['Roboto'] pr-[10px]  mb-[0px] font-[300] text-[14px] italic leading-[24px]">
              A dynamic entrepreneur with decades of experience, Mr. Teeku Singh Choudhary has been a driving force in expanding the operations of Godara Brothers across diverse industries. His expertise in business operations, strategic expansion, and financial management has played a crucial role in scaling the company’s global footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 md:mt-0
          border-b
          border-[#603812] 
          border-solid px-4 sm:px-6 md:px-8 lg:px-[100px] md:flex-row h-auto md:h-[350px]">
      {/* First column - Title */}
      <div className="w-full md:w-1/4 md:border-r border-[#603812] border-b md:border-b-0 text-center flex justify-center pb-6 pt-1 md:pt-16">
        <h2 
          className="font-['Libre_Baskerville'] text-center md:text-left text-2xl md:text-3xl lg:text-3xl leading-tight text-center bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          <span className="font-bold">Key</span>{" "}<br className="hidden md:block"/>
          <span className="italic">Achievements</span>
        </h2>
      </div>

      {/* Second column */}
      <div className="w-full md:w-1/4 px-[100px] border-b md:border-b-0 md:px-8 pt-8 pb-6 text-center md:pt-[60px] md:border-r border-[#603812] flex items-center">
      <p
        className="font-['Roboto'] text-base md:text-lg text-[#A08871] font-normal"
      >
        <span className="text-[#603812] font-[300] inline">Co-founded</span>{' '}
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          Aqua Beverages Sarlu
        </span>
        <span className="text-[#603812] font-[300] inline">, a leading name in the beverage industry.</span>
      </p>
      </div>

      {/* Third column */}
      <div className="w-full md:w-1/4 px-[100px] md:border-b-0 md:px-8 pt-8 pb-6 border-b text-center md:pt-[60px] md:border-r border-[#603812] flex items-center">
      <p
        className="font-['Roboto'] text-base md:text-lg text-[#A08871] font-normal"
      >
        <span className="text-[#603812] font-[300] inline">Spearheaded</span>{' '}
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          global expansion initiatives
        </span>
        <span className="text-[#603812] font-[300] inline"> across multiple sectors.</span>
      </p>
      </div>

      {/* Fourth column */}
      <div className="w-full md:w-1/4 px-[100px] md:border-b-0 md:px-8 pt-8 pb-6 text-center md:pt-[60px] md:border-r border-[#603812] flex items-center">
      <p
        className="font-['Roboto'] text-base md:text-lg text-[#A08871] font-normal"
      >
        <span className="text-[#603812] font-[300] inline">Strong expertise in</span>{' '}
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          finance, risk management, and corporate governance.
        </span>
      </p>
      </div>
      

    </div>
    <div className=" border-b border-[#603812]">
  <section className="text-center px-8 py-12 md:py-24 lg:py-32 max-w-[1440px] ">
    <div className="md:px-55 mx-auto">
      <h1 
        className="font-['Libre_Baskerville'] text-2xl sm:text-3xl md:text-3xl lg:text-[36px] leading-tight"
      >
        <span 
          className="font-bold inline bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          Business <span className="italic">Philosophy</span>
        </span>
      </h1>
      
      <p className="text-[#A08871] w-full text-center italic text-base sm:text-lg md:text-xl mt-6 md:mt-10 mb-6 text-center">
      &quot;We believe in building businesses that not only thrive but also contribute to economic growth and social progress. Leadership is about vision, execution, and resilience.&quot;
      </p>
    </div>
  </section>
</div>
    <FeaturedSection leftColumn={{
    sectionTitle: "Vision",
    paragraphText: '"At Godara Brothers Holdings Limited, we aim to be a global leader in diversified investments, driven by innovation, sustainable growth, and long-term value creation. Our vision is to continuously optimize our portfolio, nurturing new opportunities and expanding across various industries."'
  }}
  rightColumn={{
    sectionTitle: "Mission",
    paragraphText: '"Our mission is to create value through strategic investments, innovation, and responsible business practices. We strive to uphold excellence in every sector we operate in, ensuring growth for our businesses and stakeholders."'
  }}
/>

      {/* Full width border - separate from the content */}
      
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Im from '@/components/Im';
import Wrwe from '@/components/Wrwe';
import Stats from '@/components/Stats';
import Companies from '@/components/Companies';
import Industries from '@/components/Industries';

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
    <div className="mt-6 border-t md:mt-24">
        <div className="max-w-[1440px] relative mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] py-12 md:py-11.5">
          <div className='flex flex-col mx-auto'>
            {/* Content section */}
            <div className={`w-full md:mt[100px] md:w-[65%] pl-4 `}>
              <h3 className="font-['Libre_Baskerville'] text-[24px] mb-6 text-left">
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
          
              <h4 className="text-[#603812] font-['Roboto'] text-[16px] md:text-[18px] font-[400] leading-[28px] capitalize mb-5">
                Founder & Visionary Leader
              </h4>

              <p className="text-[#8b7e66] font-['Roboto'] md:pr-[220px] font-[300] text-[14px] italic leading-[24px]">
                With a strong background in international business and strategic investments, Mr. Nawal Kishore has been instrumental in transforming Godara Brothers into a diversified conglomerate. His leadership has steered multiple businesses toward sustained growth and industry leadership.
              </p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-2/5">
              <div className="absolute md:right-0 w-full z-[10] h-[300px] md:h-[300px]">
                {/* Gray background */}
                <div
                  className={`absolute w-[60%] right-0  md:w-[30%] h-[380px] md:h-[200px] bg-[#EFEBE7] 
                    bottom-0`}
                ></div>

                {/* Image */}
                <div
                  className={`absolute mt-12 bottom-[0] top-[100px] right-0 md:mt-0 md:bottom-[50px] w-[95%] md:w-[40%] h-[37.3%] md:h-[100%]`}
                >
                  <Image
                    src={'/kishore.jfif'}
                    alt='Mr. Nawal Kishore'
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full width border - separate from the content */}
      <div className="w-full h-[1px] bg-[#603812]"></div>
    <Im />
    <Wrwe />
    <Stats />
    <Companies />
    <Industries />
    </div>
  );
}

// src/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center px-4 py-12 md:pt-24 pb-[32px] md:pb-[60px] lg:pt-32 lg:pb-[60px]">
      <div className="max-w-3xl mx-auto">
<h1 
          className="font-['Libre_Baskerville'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight"
        >
          <span 
            className="font-[500] text-[#D8B658] block mb-2 md:mb-0 md:inline ">
            GODARA BROTHERS
          </span>
          <span className="hidden text-[#603812] font-['Libre_Baskerville'] font-[400] md:inline font-normal mx-2">—</span>
          <span className="font-normal text-[#603812] font-['Libre_Baskerville'] font-[400] italic block mt-1 md:mt-0 md:inline">A Legacy of Excellence & Innovation</span>
        </h1>
        
        <p className="text-[#A08871] mx-[6px]  font-['Roboto'] text-base sm:text-lg md:text-xl mt-4 md:mt-6 mb-8">
          A diversified business empire shaping industries across the globe.
        </p>
        
        <Link 
  href="/group-companies" 
  className="font-['Roboto'] font-[300] inline-block px-8 py-3 mt-4 md:mt-8 border border-[#CFC3B8] text-[#603812] rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out no-underline text-sm sm:text-base"
>
  Explore Our Companies
</Link>
      </div>
    </section>
  );
}
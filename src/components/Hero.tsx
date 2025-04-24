// src/components/Hero.tsx
import Link from "next/link";
import localFont from 'next/font/local'


const swiss721 = localFont({
  src: '../fonts/Swiss 721 Condensed Bold.otf', // Path relative to your component
  // If your component is in src/components and the font is in src/fonts
})

export default function Hero() {
  return (
    <section className="text-center px-4 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight"
        >
          <span 
  className={`${swiss721.className} text-[#542F0D] block mb-2 md:mb-0 md:inline`}
  // style={{
  //   backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
  // }}
>
  GODARA BROTHERS
</span>
          <span className="hidden text-[#603812] font-['Libre_Baskerville'] font-[400] md:inline font-normal mx-2">—</span>
          <span className="font-normal text-[#603812] font-['Libre_Baskerville'] font-[400] italic block mt-1 md:mt-0 md:inline">A Legacy of Excellence & Innovation</span>
        </h1>
        
        <p className="text-[#A08871] font-['Roboto'] text-base sm:text-lg md:text-xl mt-4 md:mt-6 mb-8">
          A diversified business empire shaping industries across the globe.
        </p>
        
        <Link 
          href="/group-companies" target="_blank"
          className="font-['Roboto'] font-[300] inline-block px-8 py-3 mt-4 md:mt-8 border border-[#CFC3B8] text-[#603812] rounded-full hover:bg-gray-50 transition-colors no-underline text-sm sm:text-base"
        >
          Explore Our Companies
        </Link>
      </div>
    </section>
  );
}
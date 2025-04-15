// src/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-center mx-auto px-4 mt-[100px]">
      <div className="max-w-[600px] mx-auto">
        <h1 style={{ fontFamily: "'Libre Baskerville', serif" }} className="text-[44px]">
          <span className="text-[#c9a750] font-[700] sm: text-[30px]">Godara Brothers</span>
          <span className="font-[400] mx-2 sm: text-[30px]">—</span>
          <span className="font-[400] italic sm: text-[30px]">A Legacy of Excellence & Innovation</span>
        </h1>
        
        <p className="text-[#8b7e66] text-[20px] text-base mt-4 mb-8 sm: text-[18px]">
          A diversified business empire shaping industries across the globe.
        </p>
        
        <Link 
          href="/companies" 
          style={{ fontFamily: "'Roboto', sans-serif" }}
          className="inline-block text-[18px] px-[34px] py-[10px] border-[#603812] text-[#603812] bg-white border border-gray-300 text-sm rounded-full px-8 py-3 hover:bg-gray-50 transition-colors no-underline mt-[46px]"
        >
          Explore Our Companies
        </Link>
      </div>
    </section>
    );
  }
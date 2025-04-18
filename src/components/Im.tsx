import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="mt-12 md:mt-16 w-full relative overflow-x-hidden">
      {/* Top horizontal rule with proper positioning */}
      <div className="relative pr-4 sm:pr-6 md:pr-8 lg:pr-[100px] w-screen">
        <hr className="border-0 w-full h-px bg-[#603812] z-10" />
      </div>
      
      {/* Image container with full width */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[100px] relative">
        {/* Set fixed height for mobile (217px) and use aspect ratio for larger screens */}
        <div className="h-[217px] sm:h-auto sm:aspect-[1161/402] md:aspect-[1161/402] w-full relative">
          <Image
            src="/Rectangle 2.png"
            alt="Godara Banner"
            fill
            priority
            // sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Bottom horizontal rule */}
      <div className="relative pl-4 sm:pl-6 md:pl-8 lg:pl-[100px] w-screen">
      <hr className="border-0 h-px bg-[#603812] w-screen" />
      </div>
    </section>
  );
}
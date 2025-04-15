import Image from "next/image";

export default function Industries() {
    return(
        <div className="mt-[50px] border-[0px] border-t border-b border-[#603812] border-solid">
  <div className="flex flex-col">
  <div className="flex flex-row justify-center -m-4 border-[0px] border-b border-[#603812] border-solid items-center gap-4">
    <div className="border-[0px] h-[205px] text-center py-[132px] px-[45px] border-r border-[#603812] border-solid flex-1 justify-center items-center">
    <h2 style={{ fontFamily: "'Libre Baskerville', serif" }} className="w-[323px] text-[36px]">
          <span className="text-[#c9a750] font-[700]">Industries We<span className="italic"> Operate In</span></span>
        </h2>
    </div>
    <div className="border-[0px] h-[205px] py-[132px] px-[45px] border-r border-[#603812] border-solid flex-1 items-center">
    <Image
          src="/Rectangle 22.png"
          alt="African"
          height={205}
          width={323}
          className="block"
        />
    <div className="text-center block text-[#603812] text-[18px] font-[400] text-[#A08871] pt-[24px]">General Trading</div>
    </div>
    <div className="flex-1 h-[205px] py-[132px] px-[45px] justify-center items-center">
    <Image
          src="/Rectangle 23.png"
          alt="African"
          height={205}
          width={323}
          className="block"
        />
        <div className="text-center block text-[#603812] text-[18px] font-[400] text-[#A08871] pt-[24px]">Water & Beverage Production</div>
    </div>
  </div>
 


  <div className="flex flex-row justify-center items-center gap-4 px-[100px]">
    <div className="border-[0px] py-[132px] px-[45px] border-r border-[#603812] border-solid flex-1 justify-center items-center">
    <Image
          src="/Rectangle 24.png"
          alt="African"
          height={205}
          width={323}
          className="block"
        />
        <div className="text-center block text-[#603812] text-[18px] font-[400] text-[#A08871] pt-[24px]">Retail & Distribution</div>
    </div>
    <div className="border-[0px] py-[132px] px-[45px] border-r border-[#603812] border-solid flex-1 justify-center items-center">
    <Image
          src="/Rectangle 25.png"
          alt="African"
          height={205}
          width={323}
          className="block"
        />
    <div className="text-center block text-[#603812] text-[18px] font-[400] text-[#A08871] pt-[24px]">Cosmetics Manufacturing</div>
    </div>
    <div className="flex-1 py-[132px] px-[45px] justify-center items-center">
    <Image
          src="/Rectangle 26.png"
          alt="African"
          height={205}
          width={323}
          className="block"
        />
        <div className="text-center block text-[#603812] text-[18px] font-[400] text-[#A08871] pt-[24px]">Import-Export</div>
    </div>
  </div>
</div>
</div>
    )
}


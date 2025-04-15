import Image from "next/image";

export default function Companies() {
    return (
        <div className="border-[0px] border-t border-b border-[#603812] border-solid">
        <div className="pt-[100px] flex justify-center items-center">
        <h2 style={{ fontFamily: "'Libre Baskerville', serif" }} className="text-[44px] leading-tight">
          <span className="text-[#c9a750] font-[700]">Our <span className="italic">Companies</span></span>
        </h2>
      </div>

        <div className="">
  <div className="flex flex-row justify-center items-center gap-4 px-[150px]">
    <div className="flex-1 flex justify-center items-center">
    <Image
          src="/4.png"
          alt="African"
          height={200}
          width={348}
        />
    </div>
    <div className="flex-1 flex justify-center items-center">
    <Image
          src="/5.png"
          alt="GLM"
          height={200}
          width={348}
        />
    </div>
    <div className="flex-1 py-[132px] flex justify-center items-center">
    <Image
          src="/6.png"
          alt="Sg"
          height={200}
          width={348}
        />
    </div>
    <div className="flex-1 py-[132px] flex justify-center items-center">
    <Image
          src="/1.png"
          alt="Prestige"
          height={200}
          width={348}
        />
    </div>
  </div>
</div>
</div>
    );
  }
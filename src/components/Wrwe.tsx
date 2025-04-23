export default function WhoWeAre() {
  return (
    <div className="flex flex-col mt-8 md:mt-16 border-t 
          border-b 
          border-[#CFC3B8] md:border-[#603812] 
          border-solid px-4 sm:px-6 md:px-8 lg:px-[100px] md:flex-row h-auto md:h-[450px] border-b border-[#603812]">
      <div className="w-full md:w-[30%] md:border-r border-[#603812] flex justify-center md:px-6 pt-4 md:pt-8">
        <h2 
          className="font-['Libre_Baskerville'] w-full font-[400] text-center text-2xl md:text-3xl lg:text-3xl leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
          }}
        >
          <span className="font-bold font-['Libre_Baskerville']">Who</span>{" "}
          <span className="font-bold italic font-['Libre_Baskerville']">We Are</span>
        </h2>
      </div>

      <div className="w-full md:w-[70%] px-4 md:px-0 py-8 md:py-0 md:pl-[126px] md:pr-[85px] flex items-center">
        <p className="font-['Roboto'] text-lg md:text-xl text-[#A08871] font-normal">
          Godara Brothers Holdings Limited is a global leader in diversified investments, driven by innovation, sustainable growth, and long-term value creation. With strategic investments across multiple industries, we are committed to making a lasting impact through financial success, corporate responsibility, and the pursuit of excellence.
        </p>
      </div>
    </div>
  );
}
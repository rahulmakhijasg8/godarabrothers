import { Roboto } from 'next/font/google';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
// Initialize the font
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer(){
    return(
        <section className='flex flex-row md:flex-col h-[450px] mt-[50px] px-[100px] border-[0px] border-t border-[#603812] border-solid'>
        <div className="w-[33%] pt-[74px] h-full md:w-[30%] px-4 ">
        <h2 style={{ fontFamily: "'Libre Baskerville', serif" }} className="text-[30px] leading-tight">
          <span className="text-[#c9a750] font-[700]">Godara Brothers</span>
        </h2>
      </div>
      <div className="w-[30%] md:w-[70%] px-4">
        <div className='pt-[74px]'>
        <ul className={`list-none p-0 ${roboto.className}`}>
      <li className="mb-[24px] text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]">Home</li>
      <li className="mb-[24px] text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]">About Us</li>
      <li className="mb-[24px] text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]">Group Companies</li>
      <li className="mb-[24px] text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]">Leadership</li>
      <li className="mb-[24px] text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]">Contact Us</li>
    </ul>
        </div>
      </div>
      <div className="w-[37%] md:w-[70%] px-4">
        <ul className={`list-none pt-[80.5px] p-0 ${roboto.className}`}>
      <li className="mb-[24px] flex items-center text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]"><MdEmail className="text-amber-600 mr-[5px] text-lg" />Home</li>
      <li className="mb-[24px] flex items-center text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]"><MdPhone className="text-amber-600 mr-[5px] text-lg" />+971508711333, +971565544111</li>
      <li className="mb-[24px] flex items-center text-[18px] text-[#603812] font-[300] hover:text-[#c9a750]"><MdLocationOn className="text-amber-600 mr-[5px] text-lg" />Dubai, UAE</li>
    </ul>
      </div>
    </section>
    );
}
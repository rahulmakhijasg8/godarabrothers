import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='relative'>
    <nav className="flex -m-4 items-center border-[0px] justify-between h-[80px] px-[5.97%] mt-[34px] border-t border-b border-[#603812] border-solid
  ">
        <Image
          src="/godara-logo.svg"
          alt="Godara Logo"
          height={44}
          width={177}
        />

      <div className="flex items-center justify-center">
        <Link href="/" className="no-underline hover:underline text-[#603812] font-['Inter']">Home</Link>
        <Link href="/philanthropy" className="no-underline mx-[44px] hover:underline text-[#603812] font-['Inter']">Philanthropy</Link>
        <Link href="/group-companies" className="no-underline hover:underline text-[#603812] font-['Inter']">Group Companies</Link>
        <Link href="/leadership" className="no-underline mx-[44px] hover:underline text-[#603812] font-['Inter']">Leadership</Link>
        <Link href="/contact-us" className="no-underline hover:underline text-[#603812] font-['Inter']">Contact Us</Link>
      </div>
    </nav>
    </div>
  );
}
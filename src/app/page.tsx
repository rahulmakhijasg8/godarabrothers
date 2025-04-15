import Image from "next/image";
import Hero from '@/components/Hero';
import Im from '@/components/Im';
import Wrwe from '@/components/Wrwe';
import Stats from '@/components/Stats';
import Companies from '@/components/Companies';
import Industries from '@/components/Industries';

export default function Home() {
  return (
    <div>
    <Hero />
    <Im />
    <Wrwe />
    <Stats />
    <Companies />
    <Industries />
    </div>
  );
}

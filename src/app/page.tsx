"use client";

import Hero from '@/components/Hero';
import Im from '@/components/Im';
import Wrwe from '@/components/Wrwe';
import Stats from '@/components/Stats';
import Companies from '@/components/Companies';
import Industries from '@/components/Industries';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <ScrollReveal direction="up">
        <Im />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Wrwe />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <Stats />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Companies />
      </ScrollReveal>
      
      <ScrollReveal direction="up">
        <Industries />
      </ScrollReveal>
    </div>
  );
}
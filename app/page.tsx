import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Architecture from '@/components/Architecture';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFCFF]">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Services />
      <Architecture />
      <Process />
      <Pricing />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

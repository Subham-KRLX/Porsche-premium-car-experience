import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section className="hero-editorial">
    <Image src="/porsche-911-gts-hero.webp" alt="Blue Porsche 911 Carrera GTS on a sunlit village road" fill sizes="100vw" priority className="hero-photo" />
    <div className="hero-shade" />
    <div className="hero-copy">
      <p className="eyebrow"><span /> Driven by dreams. Since 1948.</p>
      <h1>Some things<br />never stand still.</h1>
      <p className="hero-description">An unmistakable silhouette. An extraordinary feeling.<br className="hidden md:block" /> Discover the next chapter of the 911 Carrera GTS.</p>
      <div className="flex flex-wrap gap-3 mt-7">
        <Link href="/models" className="button-primary">Explore the models <ArrowUpRight size={18} /></Link>
        <Link href="/#booking" className="button-outline">Book a test drive</Link>
      </div>
    </div>
    <div className="hero-caption"><div><span className="eyebrow">The icon, evolved</span><p>911 Carrera GTS</p></div><a href="#models" aria-label="Explore the model collection" className="hero-scroll"><span>Discover more</span><ArrowDown size={18} /></a></div>
  </section>
);

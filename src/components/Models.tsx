"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const models = [
  {
    id: "911",
    name: "911 Carrera GTS",
    tagline: "The Benchmark.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
    price: "From $164,900",
  },
  {
    id: "taycan",
    name: "Taycan Turbo S",
    tagline: "Electric Soul.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000",
    price: "From $209,000",
  },
    {
      id: "718",
      name: "718 Cayman GT4",
      tagline: "Pure Performance.",
      image: "https://www.marshallgoldmanbh.com/imagetag/4742/3/l/Used-2023-Porsche-718-Cayman-GT4-RS-Very-Low-Miles-Weissach-Package-Leather-and-Race-Tex-interior-1757341062.jpg",
      price: "From $106,500",
    },
    {
      id: "cayenne",
      name: "Cayenne Turbo E-Hybrid",
      tagline: "Versatile Power.",
      image: "https://images.drivespark.com/img/2023/08/porsche-canyenne-turbo-e-hybrid-action-shot-1693289347.jpg",
      price: "From $157,000",
    },
];

export const Models = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
      return () => pin.kill();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="models" className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex flex-row relative h-screen w-[400vw]">
          {/* Header Slide */}
          <div className="h-screen w-screen flex flex-col justify-center px-20">
            <h2 className="text-8xl md:text-[12rem] font-heading font-bold tracking-tighter uppercase leading-none">
              The <span className="text-porsche-red">Lineup</span>
            </h2>
            <p className="max-w-xl text-xl text-zinc-400 mt-8 tracking-wide">
              From the iconic 911 to the all-electric Taycan. Every Porsche is a sports car. Explore our range of high-performance models.
            </p>
          </div>

          {/* Model Slides */}
          {models.map((model) => (
            <div key={model.id} className="h-screen w-screen relative flex items-center justify-center p-10 md:p-20">
              <div className="relative w-full h-full group overflow-hidden border border-white/10">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-20 left-20">
                  <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-4 block">
                    {model.tagline}
                  </span>
                  <h3 className="text-6xl md:text-8xl font-heading font-bold uppercase mb-4">
                    {model.name}
                  </h3>
                  <div className="flex items-center space-x-8">
                    <span className="text-xl font-light text-zinc-300 tracking-widest uppercase">
                      {model.price}
                    </span>
                    <button className="flex items-center space-x-3 text-sm font-bold uppercase tracking-widest hover:text-porsche-red transition-colors group">
                      <span>Configure</span>
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

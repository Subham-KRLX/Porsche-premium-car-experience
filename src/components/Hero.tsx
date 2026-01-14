"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();
      
      tl.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power4.out" }
      )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.5"
      );

      // Scroll Animation
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        y: 100,
      });

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        y: -100,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070"
          alt="Porsche Heritage"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-9xl font-heading font-bold tracking-tighter uppercase mb-6"
        >
          Over <span className="text-porsche-red italic">75 Years</span>
          <br />
          of Dreams.
        </h1>
        
        <div ref={subtitleRef} className="max-w-2xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide leading-relaxed">
            Experience the new 911 Carrera GTS. The first road-legal 911 with a lightweight, performance-focused hybrid powertrain.
          </p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/models" className="group relative px-8 py-4 bg-porsche-red text-white overflow-hidden transition-all duration-300 hover:pr-12">
                <span className="relative z-10 font-bold uppercase tracking-widest text-sm">
                  Explore Models
                </span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={18} />
              </Link>
              <Link href="/#booking" className="px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                Book a Test Drive
              </Link>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-porsche-red to-transparent animate-pulse" />
      </div>
    </section>
  );
};

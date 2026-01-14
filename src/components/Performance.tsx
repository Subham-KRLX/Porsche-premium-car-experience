"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Performance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-black overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div
          style={{ x: x1 }}
          className="text-[20vw] font-heading font-black uppercase text-white/5 whitespace-nowrap leading-none"
        >
          PERFORMANCE PERFORMANCE PERFORMANCE
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="text-[20vw] font-heading font-black uppercase text-white/5 whitespace-nowrap leading-none mt-[-5vw]"
        >
          ENGINEERING ENGINEERING ENGINEERING
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-porsche-red mb-6 block font-bold">
              Engineering Excellence
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8">
              Precision in <br /> Every Detail.
            </h2>
            <p className="text-lg text-porsche-silver font-light mb-12 max-w-xl leading-relaxed">
              Every curve, every component, every sound. Engineered to deliver an
              unmatched driving experience that resonates with the soul.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-4xl font-heading font-bold mb-2">2.7s</h4>
                <p className="text-xs uppercase tracking-widest text-porsche-silver">0-60 mph</p>
              </div>
              <div>
                <h4 className="text-4xl font-heading font-bold mb-2">196</h4>
                <p className="text-xs uppercase tracking-widest text-porsche-silver">Top Speed (mph)</p>
              </div>
              <div>
                <h4 className="text-4xl font-heading font-bold mb-2">478</h4>
                <p className="text-xs uppercase tracking-widest text-porsche-silver">Power (kW)</p>
              </div>
              <div>
                <h4 className="text-4xl font-heading font-bold mb-2">800V</h4>
                <p className="text-xs uppercase tracking-widest text-porsche-silver">Architecture</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1974&auto=format&fit=crop"
                alt="Engine detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Floating Detail Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 glass p-8 max-w-xs hidden md:block"
            >
              <h5 className="font-heading font-bold uppercase mb-2">Active Aerodynamics</h5>
              <p className="text-xs text-porsche-silver leading-relaxed">
                Adapts to every driving situation for maximum stability and efficiency.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

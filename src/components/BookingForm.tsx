"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, CheckCircle2 } from "lucide-react";

export const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const id = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const hasPreviewed = useRef(false);

  useEffect(() => {
    if (isSubmitted) {
      hasPreviewed.current = true;
      resultRef.current?.focus();
    } else if (hasPreviewed.current) {
      firstNameRef.current?.focus();
    }
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-32 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div id="experience">
            <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">
              Experience
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 leading-tight">
              The Art of <br />
              <span className="italic">Performance.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md">
              A test drive is more than a trial. Explore a sample request below. For a real appointment, contact an authorized Porsche Center.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-porsche-red font-bold">01</span>
                </div>
                <span className="text-zinc-300 font-medium">Select your preferred model</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-porsche-red font-bold">02</span>
                </div>
                <span className="text-zinc-300 font-medium">Preview your request</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-porsche-red font-bold">03</span>
                </div>
                <span className="text-zinc-300 font-medium">Contact a Porsche Center to book</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-porsche-red to-transparent opacity-20 blur-xl" />
            <div className="relative glass p-10 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} aria-label="Test drive request preview" aria-describedby={`${id}-notice`} className="space-y-6">
                  <p id={`${id}-notice`} className="text-sm text-zinc-300 leading-relaxed">
                    Demo only. Use sample details. Nothing entered here is sent or saved, and no appointment is booked.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor={`${id}-first-name`} className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">First Name</label>
                      <input 
                        ref={firstNameRef}
                        id={`${id}-first-name`}
                        name="firstName"
                        autoComplete="given-name"
                        maxLength={80}
                        pattern=".*\S.*"
                        title="Enter a name containing at least one non-space character."
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor={`${id}-last-name`} className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Last Name</label>
                      <input 
                        id={`${id}-last-name`}
                        name="lastName"
                        autoComplete="family-name"
                        maxLength={80}
                        pattern=".*\S.*"
                        title="Enter a name containing at least one non-space character."
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor={`${id}-email`} className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Email Address</label>
                    <input 
                      id={`${id}-email`}
                      name="email"
                      autoComplete="email"
                      maxLength={254}
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor={`${id}-model`} className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Model of Interest</label>
                    <select id={`${id}-model`} name="model" className="w-full bg-zinc-900 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white appearance-none">
                      <option>911 Carrera GTS</option>
                      <option>Taycan Turbo S</option>
                      <option>718 Cayman GT4</option>
                      <option>Cayenne Turbo</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black py-4 font-bold uppercase tracking-[0.2em] text-sm hover:bg-porsche-red hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Preview Request</span>
                    <Eye size={16} aria-hidden="true" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-porsche-red/10 text-porsche-red mb-4">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 ref={resultRef} tabIndex={-1} className="text-3xl font-heading font-bold uppercase">Preview Complete</h3>
                  <p role="status" className="text-zinc-400">This was a demonstration. No request was sent and no appointment was booked.</p>
                  <button type="button" onClick={() => setIsSubmitted(false)} className="border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                    Start another preview
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

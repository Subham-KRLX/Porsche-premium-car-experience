"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="experience" className="py-32 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">
              Experience
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 leading-tight">
              The Art of <br />
              <span className="italic">Performance.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md">
              A test drive is more than a trial. It's the beginning of a lifelong fascination. Schedule your appointment with the future.
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
                <span className="text-zinc-300 font-medium">Choose your Porsche Center</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-porsche-red font-bold">03</span>
                </div>
                <span className="text-zinc-300 font-medium">Define your driving schedule</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-porsche-red to-transparent opacity-20 blur-xl" />
            <div className="relative glass p-10 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Model of Interest</label>
                    <select className="w-full bg-zinc-900 border border-white/10 px-4 py-3 focus:outline-none focus:border-porsche-red transition-colors text-white appearance-none">
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
                    <span>Request Test Drive</span>
                    <Send size={16} />
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
                  <h3 className="text-3xl font-heading font-bold uppercase">Request Received</h3>
                  <p className="text-zinc-400">Our specialists will contact you within 24 hours to confirm your experience.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

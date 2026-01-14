"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const models = [
  {
    id: "911",
    name: "911",
    subtitle: "Timeless Machine",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    price: "From $114,400",
  },
  {
    id: "taycan",
    name: "Taycan",
    subtitle: "Soul, electrified",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
    price: "From $90,900",
  },
  {
    id: "panamera",
    name: "Panamera",
    subtitle: "Thrilling contradictions",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
    price: "From $92,400",
  },
  {
    id: "cayenne",
    name: "Cayenne",
    subtitle: "Sportscar for five",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    price: "From $79,200",
  },
];

export function ModelShowcase() {
  return (
    <section id="models" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-porsche-red mb-4 block font-bold"
            >
              The Models
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-bold uppercase"
            >
              Choose Your <br /> Legend.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#"
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-medium hover:text-porsche-red transition-colors"
            >
              View All Models
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {models.map((model, index) => (
            <ModelCard key={model.id} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({ model, index }: { model: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative h-[600px] overflow-hidden bg-zinc-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between">
        <div>
          <motion.h3 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-2">
            {model.name}
          </motion.h3>
          <p className="text-sm uppercase tracking-[0.3em] text-porsche-silver font-medium">
            {model.subtitle}
          </p>
        </div>

        <div className="flex items-end justify-between translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-porsche-silver mb-1">Price</p>
            <p className="text-xl font-heading font-medium tracking-wide">{model.price}</p>
          </div>
          <Link
            href="#"
            className="px-6 py-3 border border-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-colors"
          >
            Configure
          </Link>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-porsche-red transition-all duration-700 group-hover:w-full z-30" />
    </motion.div>
  );
}

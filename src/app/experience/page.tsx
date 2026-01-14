import Link from "next/link";
import { ArrowLeft, Play, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Porsche Track Experience",
      description: "Hone your driving skills with professional instructors on world-class tracks.",
      image: "https://content-hub.imgix.net/6yf0Xu835Sht3T7FZNNx6H/40dc2936ccc181be3e3464f3dccb3941/a-20steep-20learning-20curve-20the-20porsche-20track-20experience.jpg?w=2064",
    },
    {
      title: "Porsche Travel Experience",
      description: "Discover the most beautiful routes in the world behind the wheel of a Porsche.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Porsche Ice Experience",
      description: "Master the elements and learn to control your Porsche on ice and snow.",
      image: "https://images.ctfassets.net/gyb9rohhih9s/2mXpF5G2IjRjXoquUZ2LRd/2ede74711a7ace38b7f276a8b378356d/01_PorscheIceExperience_IF_TH_29_01_2025_S_02829_LB.jpg",
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 mb-12">
        <Link href="/" className="inline-flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      <section className="container mx-auto px-6 py-12">
        <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">The Porsche Experience</span>
        <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase mb-12">Beyond the <br/><span className="italic">Driver's Seat.</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[3/4]">
              <Image 
                src={exp.image} 
                alt={exp.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold uppercase mb-4">{exp.title}</h3>
                <p className="text-zinc-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{exp.description}</p>
                <Link href="/#booking" className="w-fit px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold text-center">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

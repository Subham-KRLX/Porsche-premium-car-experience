import Link from "next/link";
import { ArrowLeft, Tool, Settings, Calendar, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ServicePage() {
  const services = [
    {
      title: "Scheduled Maintenance",
      icon: <Settings size={32} />,
      description: "Keep your Porsche in peak condition with factory-recommended service intervals."
    },
    {
      title: "Genuine Parts",
      icon: <ShieldCheck size={32} />,
      description: "We use only genuine Porsche parts to ensure performance and reliability."
    },
    {
      title: "Porsche Warranty",
      icon: <ShieldCheck size={32} />,
      description: "Comprehensive protection for your peace of mind and your vehicle's longevity."
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
        <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">Service & Parts</span>
        <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase mb-16">Precision <br/><span className="italic">Care.</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {services.map((service, i) => (
            <div key={i} className="p-8 border border-white/10 hover:border-porsche-red transition-colors group">
              <div className="text-porsche-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="relative h-[60vh] overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
            alt="Porsche Service" 
            fill 
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-8">Book Your Service Appointment</h2>
            <Link href="/#booking" className="bg-porsche-red text-white px-12 py-5 uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300">
              Schedule Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

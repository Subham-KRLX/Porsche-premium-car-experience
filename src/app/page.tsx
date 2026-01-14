import { Hero } from "@/components/Hero";
import { Models } from "@/components/Models";
import { BookingForm } from "@/components/BookingForm";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Models />
      <BookingForm />
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/10 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="text-3xl font-heading font-bold tracking-[0.2em] uppercase block mb-6">PORSCHE</span>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Experience the fascination of the sports car. Over 75 years of engineering excellence and dreams.
              </p>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Models</h4>
              <ul className="space-y-4 text-zinc-500 text-sm uppercase tracking-widest">
                <li><Link href="/models" className="hover:text-white transition-colors">718</Link></li>
                <li><Link href="/models" className="hover:text-white transition-colors">911</Link></li>
                <li><Link href="/models" className="hover:text-white transition-colors">Taycan</Link></li>
                <li><Link href="/models" className="hover:text-white transition-colors">Cayenne</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Experience</h4>
              <ul className="space-y-4 text-zinc-500 text-sm uppercase tracking-widest">
                <li><Link href="/experience" className="hover:text-white transition-colors">Track Experience</Link></li>
                <li><Link href="/experience" className="hover:text-white transition-colors">Travel Experience</Link></li>
                <li><Link href="/experience" className="hover:text-white transition-colors">Ice Experience</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Shop & Service</h4>
              <ul className="space-y-4 text-zinc-500 text-sm uppercase tracking-widest">
                <li><Link href="/shop" className="hover:text-white transition-colors">Lifestyle Shop</Link></li>
                <li><Link href="/service" className="hover:text-white transition-colors">Service Booking</Link></li>
                <li><Link href="/service" className="hover:text-white transition-colors">Genuine Parts</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Imprint</a>
            </div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">© 2024 Porsche Inspired Experience. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { Hero } from "@/components/Hero";
import { Models } from "@/components/Models";
import { BookingForm } from "@/components/BookingForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Models />
      <BookingForm />
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-3xl font-heading font-bold tracking-[0.2em] uppercase">PORSCHE</span>
          <div className="flex space-x-12 text-sm uppercase tracking-widest text-zinc-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
          <p className="text-zinc-500 text-sm">© 2024 Porsche Inspired Experience. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

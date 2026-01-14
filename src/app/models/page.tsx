import { Models } from "@/components/Models";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ModelsPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-6 mb-12">
        <Link href="/" className="inline-flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
      <Models />
    </main>
  );
}

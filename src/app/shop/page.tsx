import Link from "next/link";
import { ArrowLeft, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ShopPage() {
  const products = [
    {
      name: "911 Turbo S Model Car",
      price: "$120.00",
      category: "Models",
      image: "https://a.storyblok.com/f/322327/5760x1899/635c30351d/cz26w10ox0003-911-turbo-s-side-desktop.jpg/m/2560x822/smart/filters:format(webp)",
    },
      {
        name: "Heritage Chronograph",
        price: "$6,500.00",
        category: "Watches",
        image: "https://shop.porsche.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F1oyzmkwpf3d5%2F7miPJr0ml0MeG7UF2V9esh%2Fb1680b0c8e373b06f6a5eef6f8e2e215%2F210914_Speedster-Heritage_Downloadblock_.jpg&w=2560&q=75",
      },
    {
      name: "Driving Gloves",
      price: "$250.00",
      category: "Apparel",
      image: "https://opinari-drivers.com/cdn/shop/products/v4.jpg",
    },
    {
      name: "Porsche Design Backpack",
      price: "$450.00",
      category: "Accessories",
      image: "https://img.shopstyle-cdn.com/sim/a7/2f/a72f308617d4844c374dd93d9b1ab875_best/roadster-evo-nylon-backpack-xs.jpg",
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
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">Porsche Shop</span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase">Lifestyle <br/><span className="italic">Collection.</span></h1>
          </div>
          <Link href="/#booking" className="flex items-center space-x-3 bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-porsche-red hover:text-white transition-all duration-300">
            <ShoppingBag size={18} />
            <span>View Cart (0)</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <Link href="/#booking" key={i} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-zinc-900 mb-6">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-2 block">{product.category}</span>
              <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-porsche-red transition-colors">{product.name}</h3>
              <p className="text-zinc-400 font-light">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

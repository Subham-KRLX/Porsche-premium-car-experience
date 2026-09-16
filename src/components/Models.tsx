import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const models = [
  { name: "718 Cayman GT4", tagline: "Pure performance", image: "/porsche-718-cayman-gt4.webp", price: "$106,500" },
  { name: "911 Carrera GTS", tagline: "The benchmark", image: "/porsche-911-gts-hero.webp", price: "$164,900" },
  { name: "Taycan Turbo S", tagline: "Electric soul", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000", price: "$209,000" },
  { name: "Cayenne Turbo E-Hybrid", tagline: "Versatile power", image: "https://images.drivespark.com/img/2023/08/porsche-canyenne-turbo-e-hybrid-action-shot-1693289347.jpg", price: "$157,000" },
];

export const Models = () => (
  <section id="models" className="model-collection">
    <div className="collection-heading">
      <div><p className="eyebrow">01 / The collection</p><h2>Find your<br /><em>extraordinary.</em></h2></div>
      <p>Four expressions of the same obsession.<br />Every Porsche is a sports car at heart.</p>
    </div>
    <div className="model-grid">
      {models.map((model, index) => (
        <article className="model-card group" key={model.name}>
          <div className="model-photo"><Image src={model.image} alt={model.name} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><span className="model-index">0{index + 1}</span></div>
          <div className="model-info"><div><p className="eyebrow">{model.tagline}</p><h3>{model.name}</h3><p className="model-price">From {model.price}</p></div><Link href="/#booking" className="model-arrow" aria-label={`Book a test drive for the ${model.name}`}><ArrowUpRight size={23} /></Link></div>
        </article>
      ))}
    </div>
  </section>
);

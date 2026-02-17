import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Category = "ceramica" | "fibrocimento" | "metalico";

const categoryLabels: Record<Category, string> = {
  ceramica: "Cerâmica",
  fibrocimento: "Fibrocimento",
  metalico: "Metálico",
};

const productsByCategory: Record<Category, { id: number; name: string }[]> = {
  ceramica: [
    { id: 1, name: "Grampo Final Flex" },
    { id: 2, name: "Grampo Intermediário" },
    { id: 3, name: "Suporte Colonial" },
  ],
  fibrocimento: [
    { id: 4, name: "Parafuso Prisioneiro" },
    { id: 5, name: "Kit Fibro Flex" },
    { id: 6, name: "Mini Trilho 35cm" },
  ],
  metalico: [
    { id: 7, name: "Presilha Trapézio" },
    { id: 8, name: "Grampo Standing Seam" },
    { id: 9, name: "Kit Metálico Pro" },
  ],
};

const ProductsSection = () => {
  const [active, setActive] = useState<Category>("ceramica");

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Solar System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
          Linha Flex System
        </h2>
        <p className="text-muted-foreground mb-8">
          Estruturas desenvolvidas para diferentes tipos de instalação
          fotovoltaica.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-solar"
                  : "bg-solar-gray text-foreground hover:bg-solar-gray-dark/20"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {productsByCategory[active].map((p) => (
            <div
              key={p.id}
              className="bg-solar-gray rounded-2xl p-6 flex flex-col items-center text-center shadow-card hover:shadow-solar transition-shadow"
            >
              <div className="w-28 h-28 bg-solar-gray-dark/30 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-solar-gray-dark/50 rounded-lg" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-4">
                {p.name}
              </h4>
              <button className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://solarsystem.ind.br/catálogo.pdf"
            className="inline-block px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

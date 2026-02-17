import { ArrowRight } from "lucide-react";

const products = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: "Grampo Final Flex",
}));

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Solar System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
          Linha Flex System:
        </h2>
        <p className="text-muted-foreground mb-4">
          Estruturas desenvolvidas para diferentes tipos de instalação fotovoltaica.
        </p>
        <p className="text-primary font-bold text-lg mb-8">Telhado Cerâmico:</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-solar-gray rounded-2xl p-5 flex flex-col items-center text-center shadow-card hover:shadow-solar transition-shadow"
            >
              <div className="w-24 h-24 bg-solar-gray-dark/30 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-solar-gray-dark/50 rounded-lg" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-3">{p.name}</h4>
              <button className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#catalogo"
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

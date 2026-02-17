import ceramicaImg from "@/assets/ceramica.png";
import fibrocimentoImg from "@/assets/fibrocimento.png";
import metalicoImg from "@/assets/metalico.png";

const categories = [
  { title: "Telhas de Cerâmica", image: ceramicaImg },
  { title: "Telhados de Fibrocimento", image: fibrocimentoImg },
  { title: "Telhados Metálicos", image: metalicoImg },
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-20 bg-gradient-orange">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-3">
          Solar System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight mb-12 max-w-lg">
          Projetado para atender às <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-xl inline-block">exigências do mercado solar.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-3xl p-8 flex flex-col items-center text-center shadow-card hover:shadow-solar transition-shadow"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#catalogo"
            className="inline-block px-8 py-3 rounded-2xl bg-secondary text-secondary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

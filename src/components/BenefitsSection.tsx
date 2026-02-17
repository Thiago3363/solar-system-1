import durabilityImg from "@/assets/durability.png";

const BenefitsSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0 w-full max-w-sm">
            <img
              src={durabilityImg}
              alt="Durabilidade e segurança"
              className="w-full rounded-3xl shadow-card"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Solar System
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
              Projetado para atender às{" "}
              <span className="text-gradient-orange">exigências do mercado solar.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Somos uma empresa especializada na fabricação e fornecimento de fixadores de painéis fotovoltaicos de alta qualidade. Nosso negócio é fornecer soluções confiáveis e eficientes para instalações de energia solar, ajudando nossos clientes a obter o máximo desempenho e durabilidade de seus painéis solares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import durabilidadeImg from "@/assets/durabilidade-seguranca.png";

const BenefitsSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Coluna da Imagem */}
          <div className="flex-1 flex justify-center">
            <img
              src={durabilidadeImg}
              alt="Durabilidade e segurança garantida para uma instalação solar confiável"
              className="w-full max-w-lg rounded-3xl shadow-card"
            />
          </div>

          {/* Coluna do Texto */}
          <div className="flex-1 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              SOLAR SYSTEM
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Projetado para atender às{" "}
              <span className="text-primary">exigências do mercado solar.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma empresa especializada na fabricação e fornecimento de
              fixadores de painéis fotovoltaicos de alta qualidade. Nosso
              negócio é fornecer soluções confiáveis e eficientes para
              instalações de energia solar, ajudando nossos clientes a obter o
              máximo desempenho e durabilidade de seus painéis solares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

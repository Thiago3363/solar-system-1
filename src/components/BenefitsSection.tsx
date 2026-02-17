import durabilidadeImg from "@/assets/durabilidade-seguranca.png";

const BenefitsSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <img
          src={durabilidadeImg}
          alt="Durabilidade e segurança garantida para uma instalação solar confiável"
          className="w-full max-w-lg rounded-3xl shadow-card"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;

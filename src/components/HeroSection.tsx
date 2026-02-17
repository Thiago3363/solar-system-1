import heroImg from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section id="início" className="relative min-h-[600px] lg:min-h-[700px] flex items-center mt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Painéis solares"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-xl animate-slide-in-left bg-accent/80 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Fixação solar desenvolvida para quem projeta e instala
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
            Projetadas para segurança, durabilidade e eficiência em instalações solares.
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 rounded-2xl bg-secondary text-secondary-foreground font-bold text-base hover:opacity-90 transition-opacity shadow-solar"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

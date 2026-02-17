import auroraLogo from "@/assets/aurora.png";

const SocialProof = () => {
  return (
    <section className="bg-solar-gray py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap opacity-60 grayscale">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src={auroraLogo}
              alt="Parceiro Aurora"
              className="h-8 md:h-10 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

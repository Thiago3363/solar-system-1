import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import auroraLogo from "@/assets/aurora.png";

const testimonials = [
  {
    name: "Dmitry Nathan",
    text: "Extremely easy to use, helped us develop our Vote for George Washington micro-site extra-easily quickly! We will definitely use it again for other projects.",
  },
  {
    name: "Austin Campbell",
    text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Solar System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          Construindo Confiança,
          <br />
          <span className="text-gradient-orange">Entregando Excelência.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-4">
              <img src={auroraLogo} alt="Logo parceiro" className="h-10 w-fit object-contain" />
              <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                — {t.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrent(0)}
            className={`w-3 h-3 rounded-full transition-colors ${current === 0 ? "bg-primary" : "bg-solar-gray-dark"}`}
          />
          <button
            onClick={() => setCurrent(1)}
            className={`w-3 h-3 rounded-full transition-colors ${current === 1 ? "bg-primary" : "bg-solar-gray-dark"}`}
          />
          <button
            onClick={() => setCurrent(2)}
            className={`w-3 h-3 rounded-full transition-colors ${current === 2 ? "bg-primary" : "bg-solar-gray-dark"}`}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

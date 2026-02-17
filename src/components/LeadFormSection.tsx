import { useEffect } from "react";
import { Phone, PhoneCall, Mail } from "lucide-react";
import girlImg from "@/assets/girl.png";

// Declaração para evitar erro de TypeScript com o objeto global do RD
declare global {
  interface Window {
    RDStationForms: {
      new (
        formId: string,
        accountId: string,
      ): {
        createForm: () => void;
      };
    };
  }
}

const LeadFormSection = () => {
  useEffect(() => {
    // Criação do script principal do RD Station
    const script = document.createElement("script");
    script.src =
      "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;

    script.onload = () => {
      // Inicia o formulário assim que o script carregar
      if (window.RDStationForms) {
        new window.RDStationForms(
          "form-solarsystem-41430e57d0b4b0e22666",
          "null",
        ).createForm();
      }
    };

    document.body.appendChild(script);

    // Limpeza ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contato" className="py-20 bg-solar-gray">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 text-center">
          Solar System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
          Solicite uma{" "}
          <span className="text-gradient-orange">análise técnica</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="flex-shrink-0 w-64 lg:w-80">
            <img
              src={girlImg}
              alt="Profissional Solar System"
              className="w-full"
            />
          </div>

          <div className="flex-1 w-full">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              {/* O formulário do RD será injetado aqui dentro */}
              <div role="main" id="form-solarsystem-41430e57d0b4b0e22666"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="tel:+5511981593526"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold"
          >
            <Phone size={16} /> (11) 98159 3526
          </a>
          <a
            href="https://wa.me/5511981593526"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold"
          >
            <PhoneCall size={16} /> (11) 98159 3526
          </a>
          <a
            href="mailto:contato@solarsystem.com.br"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold"
          >
            <Mail size={16} /> (11) 98159 3526
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;

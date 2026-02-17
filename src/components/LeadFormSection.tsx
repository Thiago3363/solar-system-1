import { useState } from "react";
import { Phone, PhoneCall, Mail } from "lucide-react";
import girlImg from "@/assets/girl.png";

const LeadFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contato" className="py-20 bg-solar-gray">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 text-center">
          Solar System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
          Solicite uma <span className="text-gradient-orange">análise técnica</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="flex-shrink-0 w-64 lg:w-80">
            <img src={girlImg} alt="Profissional Solar System" className="w-full" />
          </div>

          <div className="flex-1 w-full">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-primary mb-6">Formulário do RD</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  placeholder="Mensagem (opcional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  Enviar solicitação
                </button>
              </form>
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
            href="tel:+5511981593526"
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

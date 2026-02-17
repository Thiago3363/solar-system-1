import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Início", "Produtos", "Categorias", "Sobre", "Contato"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Solar System" className="h-10" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://solarsystem.ind.br/catálogo.pdf"
            className="px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Ver Catálogo
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511981593526&text=Ol%C3%A1,%20tenho%20interesse%20nos%20produtos%20da%20Solar%20System!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-whatsapp text-whatsapp-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-foreground/70"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href="https://solarsystem.ind.br/catálogo.pdf"
              className="px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold"
            >
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/5511981593526"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-whatsapp text-whatsapp-foreground text-sm font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

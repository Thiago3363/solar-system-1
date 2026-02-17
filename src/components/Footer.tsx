import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <img src={logo} alt="Solar System" className="h-10 brightness-0 invert" />
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-xs text-secondary-foreground/50">
          © 2026 Solar System. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

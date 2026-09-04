import Logo from "./Logo";
import { INSTAGRAM_LINK, INSTAGRAM_USUARIO, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80 border-t border-cream/10">
      <div className="wrap py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          {/* LOGO */}
          <Logo size={38} tone="light" />
          <p className="font-grotesk text-[11px] tracking-[0.2em] uppercase mt-4 text-cream/60">
            Comfort real + Enfoque sensorial
          </p>
        </div>

        <div className="flex flex-col gap-2 font-grotesk text-[12px] tracking-[0.14em] uppercase">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            WhatsApp
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
            Instagram @{INSTAGRAM_USUARIO}
          </a>
          <a href="#inicio" className="hover:text-cream">Volver arriba</a>
        </div>
      </div>

      <div className="wrap pb-10">
        <p className="text-[12px] text-cream/50 leading-relaxed max-w-[60ch]">
          Sensoria es un emprendimiento hecho por estudiantes dentro de los
          programas de Junior Achievement y Escuelas Verdes. Cuellitos de
          descanso con materiales reciclables.
        </p>
        <p className="text-[11px] text-cream/40 mt-4">
          © {new Date().getFullYear()} Sensoria. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

import Logo from "./Logo";
import Leaf from "./Leaf";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";
import { ENVIOS } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-[72px] pb-16"
    >
      {/* formas orgánicas de fondo */}
      <div
        aria-hidden
        className="absolute -left-40 top-10 w-[520px] h-[520px] rounded-full bg-sage/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 w-[460px] h-[460px] rounded-full bg-olive/15 blur-3xl"
      />
      <Leaf size={120} className="absolute left-6 bottom-10 text-olive/20 hidden md:block" />
      <Leaf
        size={90}
        className="absolute right-10 top-28 text-olive/20 hidden md:block"
        style={{ transform: "scaleX(-1)" }}
      />

      <div className="wrap-narrow relative text-center flex flex-col items-center">
        <Reveal>
          {/* LOGO GRANDE */}
          <Logo size={72} />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="label mt-8">
            Comfort real&nbsp;&nbsp;+&nbsp;&nbsp;Enfoque sensorial
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <h1 className="font-display mt-5 text-forest leading-[1.05] text-[clamp(2.5rem,6.5vw,4.3rem)] font-light [text-wrap:balance] max-w-[18ch] mx-auto">
            Cuellitos que se adaptan a vos
          </h1>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-6 max-w-[48ch] text-[1.05rem] text-muted">
            Sensoria es un cuellito de descanso para viajes y traslados.
            Disponible en dos modelos: uno para el uso cotidiano y otro con
            enfoque sensorial, desarrollado para personas neurodivergentes.
          </p>
        </Reveal>

        <Reveal delay={0.34} className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#modelos"
              className="inline-flex items-center gap-2.5 font-grotesk text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-full bg-forest text-cream hover:bg-olive transition-colors"
            >
              Ver los modelos
            </a>
            <WhatsAppButton variant="outline">Consultar por WhatsApp</WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={0.44}>
          <p className="mt-6 font-grotesk text-[11px] tracking-[0.2em] uppercase text-muted/80">
            {ENVIOS}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

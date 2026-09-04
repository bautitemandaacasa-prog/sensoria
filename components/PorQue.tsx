import Reveal from "./Reveal";
import Leaf from "./Leaf";

export default function PorQue() {
  return (
    <section id="por-que" className="section bg-forest text-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-sage/15 blur-3xl"
      />
      <Leaf size={110} className="absolute right-6 bottom-8 text-cream/10" />

      <div className="wrap relative grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal>
          <p className="label" style={{ color: "var(--sage)" }}>
            Nuestro enfoque
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mt-3">
            Por qué desarrollamos Sensoria
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-cream/85 text-[1.05rem]">
            <p>
              La mayoría de los cuellitos de viaje repiten el mismo formato: una
              espuma rígida que pierde firmeza con el uso. Partimos de otra
              pregunta: qué necesita el cuerpo para descansar realmente durante
              un trayecto.
            </p>
            <p>
              De ese análisis surgieron dos definiciones. Un sostén que se
              adapta a cada persona, y un segundo modelo con enfoque sensorial,
              para quienes necesitan mayor contención frente al ruido, la luz y
              el movimiento.
            </p>
            <p className="text-cream font-display text-[1.35rem] leading-snug">
              Más que un accesorio, buscamos que llegues a destino en mejores
              condiciones.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

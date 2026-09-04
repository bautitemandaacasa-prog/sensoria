import Reveal from "./Reveal";
import Leaf from "./Leaf";
import WhatsAppButton from "./WhatsAppButton";
import { MODELOS, ENVIOS, INSTAGRAM_LINK, INSTAGRAM_USUARIO } from "@/lib/site";

export default function Comprar() {
  return (
    <section id="comprar" className="section bg-cream-d relative overflow-hidden">
      <div className="wrap-narrow relative text-center flex flex-col items-center">
        <Reveal>
          <Leaf size={38} className="text-olive mx-auto" />
          <p className="label mt-5">Cómo comprar</p>
          <h2 className="font-display text-forest text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mt-3">
            Realizá tu pedido por WhatsApp
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted text-[1.05rem] max-w-[46ch] mt-4">
            Escribinos, indicá el modelo que te interesa y coordinamos el pago y
            el envío. {ENVIOS}.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md">
            {MODELOS.map((m) => (
              <div
                key={m.id}
                className="flex-1 bg-cream rounded-2xl border border-olive/10 p-5 flex flex-col"
              >
                <p className="font-display text-forest text-[1.15rem] leading-tight">{m.nombre}</p>
                <p className="font-display text-forest text-[1.6rem] mt-1">{m.precio}</p>
                <div className="flex-1" />
                <WhatsAppButton
                  modelo={m}
                  variant="outline"
                  className="mt-4 w-full justify-center !px-4 !text-[11px]"
                >
                  Solicitar
                </WhatsAppButton>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <WhatsAppButton>Hacer una consulta</WhatsAppButton>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-grotesk text-[13px] tracking-[0.14em] uppercase text-forest border border-olive/40 px-7 py-3.5 rounded-full hover:bg-forest hover:text-cream transition-colors"
            >
              @{INSTAGRAM_USUARIO}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

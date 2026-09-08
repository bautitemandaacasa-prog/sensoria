import Reveal from "./Reveal";
import Leaf from "./Leaf";
import WhatsAppButton from "./WhatsAppButton";
import { Check } from "lucide-react";
import { MODELOS, ENVIOS } from "@/lib/site";

export default function Modelos() {
  return (
    <section id="modelos" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-40 top-20 w-[460px] h-[460px] rounded-full bg-sage/15 blur-3xl"
      />
      <div className="wrap relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Leaf size={38} className="text-olive mx-auto" />
          <p className="label mt-5">Modelos</p>
          <h2 className="font-display text-forest text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mt-3">
            Dos modelos, un mismo diseño
          </h2>
          <p className="text-muted mt-4">
            Ambos comparten diseño, materiales y nivel de comodidad. La
            diferencia está en el trabajo sensorial.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {MODELOS.map((m) => (
            <Reveal key={m.id}>
              <div
                className={`h-full rounded-3xl p-9 flex flex-col ${
                  m.destacado
                    ? "bg-forest text-cream"
                    : "bg-cream-d border border-olive/15 text-ink"
                }`}
              >
                <div
                  className={`rounded-2xl mb-6 h-[220px] flex items-center justify-center ${
                    m.destacado ? "bg-cream/10" : "bg-cream"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.imagen}
                    alt={`Cuellito ${m.nombre}`}
                    loading="lazy"
                    className="h-[190px] w-auto object-contain"
                  />
                </div>

                {m.destacado && (
                  <span className="self-start font-grotesk text-[10px] tracking-[0.2em] uppercase bg-sage/30 text-cream px-3 py-1 rounded-full mb-5">
                    Enfoque sensorial
                  </span>
                )}

                <h3 className="font-display text-[1.9rem] leading-tight">
                  {m.nombre}
                </h3>
                {m.subtitulo && (
                  <p
                    className={`text-[0.9rem] mt-1 ${
                      m.destacado ? "text-cream/70" : "text-muted"
                    }`}
                  >
                    {m.subtitulo}
                  </p>
                )}

                <p className="font-display text-[2.4rem] mt-5">{m.precio}</p>

                <p
                  className={`mt-3 text-[0.98rem] ${
                    m.destacado ? "text-cream/85" : "text-muted"
                  }`}
                >
                  {m.resumen}
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {m.incluye.map((linea) => (
                    <li key={linea} className="flex items-start gap-2.5 text-[0.95rem]">
                      <Check
                        size={17}
                        strokeWidth={2}
                        className={`mt-1 shrink-0 ${
                          m.destacado ? "text-sage" : "text-olive"
                        }`}
                      />
                      <span className={m.destacado ? "text-cream/85" : "text-ink/80"}>
                        {linea}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <WhatsAppButton
                    modelo={m}
                    variant={m.destacado ? "solid" : "outline"}
                    className={m.destacado ? "bg-sage-d hover:bg-sage w-full justify-center" : "w-full justify-center"}
                  >
                    Solicitar este modelo
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <p className="font-grotesk text-[11px] tracking-[0.2em] uppercase text-muted/80 mt-10">
            {ENVIOS} · Pago y envío se coordinan por WhatsApp
          </p>
        </Reveal>
      </div>
    </section>
  );
}

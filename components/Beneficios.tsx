import Reveal from "./Reveal";
import Leaf from "./Leaf";
import { Wind, MoveHorizontal, Leaf as LeafIcon, Waves, Backpack, Droplets } from "lucide-react";

const ITEMS = [
  {
    icon: MoveHorizontal,
    title: "Sostén adaptable",
    text: "Acompaña distintas posturas: cede donde es necesario y mantiene firme la zona cervical.",
  },
  {
    icon: Wind,
    title: "Para trayectos largos",
    text: "En colectivo, avión, tren o auto, mantiene la cabeza estable y reduce la tensión en el cuello.",
  },
  {
    icon: Waves,
    title: "Enfoque sensorial",
    text: "La presión y la textura fueron seleccionadas para favorecer la calma y la contención.",
  },
  {
    icon: Backpack,
    title: "Liviano y compacto",
    text: "Se comprime con facilidad y ocupa poco espacio en el equipaje.",
  },
  {
    icon: LeafIcon,
    title: "Materiales reciclables",
    text: "Las telas y los rellenos son reciclables, en línea con nuestro compromiso ambiental.",
  },
  {
    icon: Droplets,
    title: "Funda lavable",
    text: "La funda es removible y lavable, pensada para el uso diario.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="section bg-cream-d relative overflow-hidden">
      <Leaf size={80} className="absolute right-8 top-10 text-olive/15" />
      <div className="wrap relative">
        <Reveal className="max-w-2xl">
          <p className="label">Características</p>
          <h2 className="font-display text-forest text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mt-3">
            Un producto pensado en cada detalle
          </h2>
          <p className="text-muted mt-4">
            Cada decisión de diseño responde a un objetivo: mejorar tu descanso y
            tu bienestar durante el trayecto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <Reveal key={it.title}>
              <div className="h-full bg-cream rounded-2xl p-8 border border-olive/10">
                <it.icon size={26} strokeWidth={1.4} className="text-olive" />
                <h3 className="font-display text-[1.4rem] text-forest mt-5 leading-snug">
                  {it.title}
                </h3>
                <p className="text-[0.95rem] text-muted mt-2">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

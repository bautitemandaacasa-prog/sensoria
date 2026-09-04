import Reveal from "./Reveal";
import Leaf from "./Leaf";

export default function Historia() {
  return (
    <section id="historia" className="section relative overflow-hidden">
      <div className="wrap-narrow relative">
        <Reveal className="text-center">
          <Leaf size={38} className="text-olive mx-auto" />
          <p className="label mt-5">Quiénes somos</p>
          <h2 className="font-display text-forest text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mt-3">
            Estudiantes desarrollando un producto real
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-muted text-[1.05rem] mt-8">
            <p>
              Somos un grupo de estudiantes. Sensoria se desarrolló dentro de los
              programas de Junior Achievement y Escuelas Verdes, con el objetivo
              de llevar un producto propio al mercado.
            </p>
            <p>
              Organizamos el trabajo por áreas —producto, costos, comunicación y
              ventas— y trabajamos sobre prototipos reales. Los probamos con
              compañeros y familias, y ajustamos el diseño hasta alcanzar el
              resultado buscado.
            </p>
            <p>
              El modelo sensorial se definió a partir del testimonio de personas
              neurodivergentes de nuestro entorno sobre qué recursos las ayudan a
              regularse. Es un proyecto que recién comienza y lo llevamos
              adelante con responsabilidad.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-wrap gap-3 mt-9">
            {["Junior Achievement", "Escuelas Verdes", "Materiales reciclables"].map((t) => (
              <span
                key={t}
                className="font-grotesk text-[11px] tracking-[0.16em] uppercase text-olive border border-olive/30 rounded-full px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

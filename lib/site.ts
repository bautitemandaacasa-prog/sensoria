// ─────────────────────────────────────────────────────────────
//  DATOS DE SENSORIA — editá todo desde acá
// ─────────────────────────────────────────────────────────────

// WhatsApp: número en formato internacional SIN espacios, +, ni guiones.
// Ej: Argentina 11 2345-6789  ->  "5491123456789"
export const WHATSAPP_NUMERO = "5491122343214";

export const INSTAGRAM_USUARIO = "sensoria.green";
export const INSTAGRAM_LINK = "https://www.instagram.com/sensoria.green";

// Zona de envíos
export const ENVIOS = "Envíos a todo el país";

export const SITE_URL = "https://sensoria.com.ar"; // TODO: dominio final

// ── Modelos ──────────────────────────────────────────────────
export type Modelo = {
  id: string;
  nombre: string;
  subtitulo?: string;
  precio: string;
  resumen: string;
  incluye: string[];
  destacado?: boolean;
};

export const MODELOS: Modelo[] = [
  {
    id: "basico",
    nombre: "Sensoria Básico",
    precio: "$20.000",
    resumen:
      "Cuellito de descanso para el uso cotidiano. Brinda un sostén uniforme para la cabeza y el cuello en viajes, siestas y traslados.",
    incluye: [
      "Relleno que conserva la forma",
      "Funda de material reciclable",
      "Liviano y fácil de transportar",
    ],
  },
  {
    id: "sensorial",
    nombre: "Sensoria Sensorial",
    subtitulo: "Desarrollado para personas neurodivergentes",
    precio: "$24.000",
    resumen:
      "Incorpora una presión envolvente y una textura seleccionada para aportar contención y acompañar la regulación sensorial en entornos de alto estímulo.",
    incluye: [
      "Todas las características del modelo Básico",
      "Presión envolvente y constante",
      "Textura seleccionada para el confort sensorial",
    ],
    destacado: true,
  },
];

// Link de WhatsApp. Si le pasás un modelo, arma el mensaje con ese modelo.
export const whatsappLink = (modelo?: Modelo | string) => {
  const nombre = typeof modelo === "string" ? modelo : modelo?.nombre;
  const mensaje = nombre
    ? `¡Hola Sensoria! Quiero pedir el cuellito ${nombre} 🌿`
    : "¡Hola Sensoria! Me interesa comprar un cuellito sensorial 🌿";
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
};

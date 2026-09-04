import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, INSTAGRAM_LINK, whatsappLink, MODELOS } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sensoria | Cuellitos de descanso para viajar",
  description:
    "Sensoria — cuellitos de descanso para viajes y traslados. Modelo Básico ($20.000) y modelo Sensorial pensado para personas neurodivergentes ($24.000). Materiales reciclables. Proyecto de estudiantes de Junior Achievement y Escuelas Verdes.",
  keywords: [
    "sensoria",
    "cuellito sensorial",
    "almohada de viaje",
    "cuello de viaje",
    "comfort viajes",
    "producto sustentable",
    "materiales reciclables",
    "junior achievement",
    "escuelas verdes",
    "emprendimiento estudiantil argentina",
  ],
  authors: [{ name: "Sensoria" }],
  creator: "Sensoria",
  publisher: "Sensoria",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sensoria | Cuellitos de descanso para viajar",
    description:
      "Dos modelos: Básico y Sensorial (pensado para personas neurodivergentes). Materiales reciclables.",
    type: "website",
    locale: "es_AR",
    siteName: "Sensoria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensoria | Cuellitos de descanso",
    description: "Modelo Básico y modelo Sensorial. Materiales reciclables. Envíos a todo el país.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cuellito de descanso Sensoria",
    description:
      "Cuellito de descanso para viajes y traslados. Sostén que se adapta a cada persona y materiales reciclables. Disponible en modelo Básico y en modelo Sensorial pensado para personas neurodivergentes.",
    brand: { "@type": "Brand", name: "Sensoria" },
    category: "Accesorios de viaje",
    url: SITE_URL,
    sameAs: [INSTAGRAM_LINK, whatsappLink()],
    offers: MODELOS.map((m) => ({
      "@type": "Offer",
      name: m.nombre,
      price: m.precio.replace(/[^0-9]/g, ""),
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#modelos`,
    })),
  };

  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Modelos from "@/components/Modelos";
import PorQue from "@/components/PorQue";
import Historia from "@/components/Historia";
import Comprar from "@/components/Comprar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Modelos />
        <PorQue />
        <Historia />
        <Comprar />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ReviewSection from "@/components/ReviewSection";

export const metadata: Metadata = {
  title: "Dejanos tu reseña | Sensoria",
  description:
    "Contanos qué te pareció tu Sensoria. Entrá con tu cuenta de Google y dejá tu reseña.",
};

export default function ResenasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <ReviewSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

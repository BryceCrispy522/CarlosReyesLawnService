import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Offer } from "@/components/Offer";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

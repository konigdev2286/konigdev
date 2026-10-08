import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Method from "@/components/Method";
import PortfolioProject from "@/components/PortfolioProject";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stack />
        <Services />
        <Method />
        <PortfolioProject />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

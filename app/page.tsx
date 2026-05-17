import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { DigiwaveBackground } from "@/components/digiwave-background";

export default function HomePage() {
  return (
    <>
      <DigiwaveBackground />
      <main className="min-h-screen relative" style={{ zIndex: 2 }}>
        <Header />
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

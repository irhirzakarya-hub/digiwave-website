import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { OceanWaveBackground } from "@/components/ocean-wave-background";

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <OceanWaveBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

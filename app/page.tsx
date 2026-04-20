import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import NewsSection from "@/components/ui/NewsSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <NewsSection />
    </main>
  );
}

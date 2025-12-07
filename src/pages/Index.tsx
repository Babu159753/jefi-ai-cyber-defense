import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DemoSection from "@/components/sections/DemoSection";
import DownloadSection from "@/components/sections/DownloadSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <ProblemSection />
        <FeaturesSection />
        <DemoSection />
        <DownloadSection />
        <RoadmapSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

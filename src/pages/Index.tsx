import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AmazonPeerTicker } from "@/components/AmazonPeerTicker";
import { AIBuiltSection } from "@/components/AIBuiltSection";
import { AmazonShippedSection } from "@/components/AmazonShippedSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkWithMeSection } from "@/components/WorkWithMeSection";
import { EducationSection } from "@/components/EducationSection";
import { GuestbookSection } from "@/components/GuestbookSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <HeroSection />
      <AmazonPeerTicker />
      <AIBuiltSection />
      <AmazonShippedSection />
      <ExperienceSection />
      <WorkWithMeSection />
      <EducationSection />
    </main>
  );
};

export default Index;

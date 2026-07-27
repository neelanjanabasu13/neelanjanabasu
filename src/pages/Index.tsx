import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AmazonPeerTicker } from "@/components/AmazonPeerTicker";
import { AIBuiltSection } from "@/components/AIBuiltSection";
import { AmazonShippedSection } from "@/components/AmazonShippedSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkWithMeSection } from "@/components/WorkWithMeSection";
import { EducationSection } from "@/components/EducationSection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { PageEdgeRails } from "@/components/PageEdgeRails";
import { SectionRail } from "@/components/SectionRail";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <PageEdgeRails />
      <SectionRail />
      <FloatingNav />
      <HeroSection />
      <SectionDivider variant="lotus" />
      <AmazonPeerTicker />
      <AIBuiltSection />
      <SectionDivider variant="wave" />
      <AmazonShippedSection />
      <SectionDivider variant="fish" />
      <ExperienceSection />
      <SectionDivider variant="peacock" />
      <WorkWithMeSection />
      <SectionDivider variant="lotus" />
      <EducationSection />
      <SectionDivider variant="zigzag" />
      <GuestbookSection />
      <SectionDivider variant="dotline" />
    </main>
  );
};

export default Index;

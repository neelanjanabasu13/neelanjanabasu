import { CursorTrail } from "@/components/CursorTrail";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AmazonPeerTicker } from "@/components/AmazonPeerTicker";
import { AIBuiltSection } from "@/components/AIBuiltSection";
import { AmazonShippedSection } from "@/components/AmazonShippedSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkWithMeSection } from "@/components/WorkWithMeSection";
import { EducationSection } from "@/components/EducationSection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { PostscriptSection } from "@/components/PostscriptSection";
import { PageEdgeRails } from "@/components/PageEdgeRails";
import { SectionRail } from "@/components/SectionRail";
import { SectionDivider } from "@/components/SectionDivider";
import { VineScrollbar } from "@/components/VineScrollbar";


const Index = () => {
  return (
    <main className="relative min-h-screen">
      <CursorTrail />
      <PageEdgeRails />
      <VineScrollbar />
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
      <PostscriptSection />
    </main>

  );
};

export default Index;

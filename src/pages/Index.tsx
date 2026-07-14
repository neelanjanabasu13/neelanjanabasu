import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AIBuiltSection } from "@/components/AIBuiltSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { AmazonShippedSection } from "@/components/AmazonShippedSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <HeroSection />
      <AIBuiltSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <AmazonShippedSection />
      <ContactSection />
    </main>
  );
};

export default Index;

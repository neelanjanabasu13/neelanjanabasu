import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default Index;

import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import SkillsSection from "@/components/SkillsSections";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <WorksSection />
      <SkillsSection />
    </>
  );
}

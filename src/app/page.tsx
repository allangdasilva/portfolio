import FixedBackground from "@/components/FixedBackground";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Loading from "@/components/Loading";
import Nav from "@/components/Nav";
import SkillsSection from "@/components/SkillsSections";
import TechnologiesSection from "@/components/TechnologiesSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <>
      <Loading />

      <FixedBackground />

      <header>
        <Nav />
      </header>

      <main>
        <HeroSection />
        <WorksSection />
        <TechnologiesSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  );
}

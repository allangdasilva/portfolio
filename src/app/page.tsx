import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Lenis from "@/components/Lenis";
import Loading from "@/components/Loading";
import Nav from "@/components/Nav";
import SkillsSection from "@/components/SkillsSections";
import TechnologiesSection from "@/components/TechnologiesSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <>
      <Loading />
      <Lenis>
        <Nav />
        <HeroSection />
        <WorksSection />
        <TechnologiesSection />
        <SkillsSection />
        <Footer />
      </Lenis>
    </>
  );
}

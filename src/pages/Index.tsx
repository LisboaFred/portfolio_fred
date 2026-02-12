import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import ProjectsSection from "@/components/ProjectsSection";
import ContactLisboa from "@/components/Contact";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--page-bg)', transition: 'background 0.4s ease' }}>
      <Navbar />
      <Hero />
      <Experience />
      <TechnicalExpertise />
      <ProjectsSection />
      <ContactLisboa />
    </div>
  );
};

export default Index;

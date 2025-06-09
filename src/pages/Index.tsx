
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import ContactLisboa from "@/components/Contact";
import ProjectCard from "@/components/ui/ProjectsCards";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <TechnicalExpertise />
      <ProjectsSection  />
      <ContactLisboa />
    </div>
  );
};

export default Index;

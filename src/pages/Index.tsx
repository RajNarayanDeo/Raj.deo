import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen grain">
    <Navbar />
    <HeroSection />
    <MarqueeBanner />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

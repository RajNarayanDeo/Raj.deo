import V2Navbar from "@/components/v2/V2Navbar";
import V2Hero from "@/components/v2/V2Hero";
import V2About from "@/components/v2/V2About";
import V2Experience from "@/components/v2/V2Experience";
import V2Projects from "@/components/v2/V2Projects";
import V2Skills from "@/components/v2/V2Skills";
import V2Education from "@/components/v2/V2Education";
import V2Contact from "@/components/v2/V2Contact";
import V2Footer from "@/components/v2/V2Footer";

const PortfolioV2 = () => (
  <div className="min-h-screen bg-v2-bg text-v2-text font-v2-body">
    <V2Navbar />
    <V2Hero />
    <V2About />
    <V2Experience />
    <V2Projects />
    <V2Skills />
    <V2Education />
    <V2Contact />
    <V2Footer />
  </div>
);

export default PortfolioV2;

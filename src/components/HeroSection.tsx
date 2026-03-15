import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="container mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 py-32 px-6">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-foreground/70 font-body text-lg mb-2 tracking-widest uppercase">
            Product Owner &bull; AI Product Manager
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Raj Narayan<br />
            <span className="text-gradient">Deo</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            11+ years cultivating impactful products across healthcare &amp; education — turning customer needs into agile, data-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={18} /> Get In Touch
            </a>
            <a
              href="tel:+918447228045"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={18} /> +91 8447228045
            </a>
            <a
              href="/Resume_Raj_Narayan_Deo.pdf"
              download
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-full border-4 border-primary/50 overflow-hidden bg-primary/10 shadow-2xl">
            <img src={profileImg} alt="Raj Narayan Deo" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;

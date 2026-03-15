import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const V2Hero = () => (
  <section className="relative min-h-screen flex items-end pb-20 pt-32 px-6 overflow-hidden">
    {/* Large background text */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span className="font-v2-heading text-[20vw] font-black text-v2-accent/[0.04] leading-none tracking-tighter">
        PRODUCT
      </span>
    </div>

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-v2-accent font-bold text-sm tracking-[0.3em] uppercase mb-4">
          Product Owner · AI Product Manager · 11+ Years
        </p>
        <h1 className="font-v2-heading text-6xl sm:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
          Raj
          <br />
          Narayan
          <br />
          <span className="text-v2-accent">Deo</span>
        </h1>
        <p className="text-v2-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Turning customer needs into agile, data-driven solutions across healthcare &amp; education industries.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#v2-contact"
            className="inline-flex items-center gap-2 bg-v2-accent text-v2-bg px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-v2-accent-hover transition-colors"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
          <a
            href="/Resume_Raj_Narayan_Deo.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-v2-accent/40 text-v2-accent px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:border-v2-accent hover:bg-v2-accent/10 transition-colors"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </motion.div>
    </div>

    {/* Decorative line */}
    <div className="absolute right-12 top-32 bottom-20 w-px bg-gradient-to-b from-transparent via-v2-accent/30 to-transparent hidden lg:block" />
  </section>
);

export default V2Hero;

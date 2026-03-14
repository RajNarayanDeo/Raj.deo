import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const stats = [
  { value: "11+", label: "Years in\nProduct Management" },
  { value: "4", label: "Industries —\nHealthcare to EdTech" },
  { value: "15+", label: "Features\nShipped Live" },
  { value: "25%", label: "User Engagement\nIncrease" },
];

const TerminalWidget = () => {
  const [text, setText] = useState("");
  const fullText = "Product Owner. Scrum Master.\nDriving innovation across healthcare & education.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden w-full max-w-md">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive" />
        <div className="w-3 h-3 rounded-full bg-accent" />
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">raj@portfolio:~$</span>
      </div>
      <div className="p-4 font-mono text-xs text-muted-foreground min-h-[100px]">
        <span className="text-primary">$ </span>
        <span className="text-foreground">whoami</span>
        <div className="mt-2 whitespace-pre-line text-foreground/80">{text}<span className="cursor-blink text-primary">█</span></div>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="container mx-auto relative z-10 px-6 py-32">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Available for opportunities
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] mb-4">
            <span className="block">Raj Narayan</span>
            <span className="block italic text-accent">Deo</span>
          </h1>

          <p className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase mt-6 mb-2">
            Product Owner &nbsp;/&nbsp; Scrum Master
          </p>
          <p className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase">
            Pursuing PGDM, <span className="text-accent">IMT Ghaziabad</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-12 border border-border rounded-lg overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-card p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="font-display text-3xl font-bold text-foreground italic">{stat.value}</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-1 uppercase leading-tight whitespace-pre-line tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0 w-full lg:w-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TerminalWidget />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Scroll to explore</span>
        <ArrowDown size={16} className="text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

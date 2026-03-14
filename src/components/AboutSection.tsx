import { motion } from "framer-motion";
import { Target, Users, BarChart3, Zap, Layers, UserCheck } from "lucide-react";

const cards = [
  { icon: Target, title: "Product Strategy", desc: "Roadmap execution & innovative product launches driving business growth across domains." },
  { icon: Users, title: "Agile Leadership", desc: "Leading 3 cross-functional teams across multiple product lines with SAFe framework." },
  { icon: BarChart3, title: "Data Analytics", desc: "Evidence-based decisions using Power BI, SQL, and advanced visualization techniques." },
  { icon: Zap, title: "Customer-Centric", desc: "25% engagement increase through continuous customer feedback integration." },
  { icon: Layers, title: "Clinical Technology", desc: "Building web & desktop applications for healthcare improving patient care." },
  { icon: UserCheck, title: "Stakeholder Management", desc: "Fostering collaboration among engineering, design, QA, and business teams." },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">About Me</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          I don't just manage products.<br />
          <span className="italic text-accent">I craft their success.</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground leading-relaxed max-w-3xl mb-16 text-lg"
      >
        Senior Product Owner with 11+ years of comprehensive experience in product management, 
        with a strong focus on strategic planning, roadmap execution, and launching innovative products 
        that drive customer satisfaction and business growth across healthcare and education industries.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card p-8 group hover:bg-secondary transition-colors duration-500"
          >
            <card.icon size={22} className="text-primary mb-4" />
            <h3 className="font-display text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

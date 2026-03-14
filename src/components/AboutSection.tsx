import { motion } from "framer-motion";
import { Target, Users, BarChart3, Zap } from "lucide-react";

const highlights = [
  { icon: Target, label: "Product Strategy", desc: "Roadmap execution & innovative product launches" },
  { icon: Users, label: "Agile Leadership", desc: "Leading cross-functional teams across multiple product lines" },
  { icon: BarChart3, label: "Data-Driven", desc: "Evidence-based decisions with analytics & visualization" },
  { icon: Zap, label: "Customer-Centric", desc: "25% user engagement boost through continuous feedback" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed text-center"
        >
          Cultivated a robust career in Product Management, focusing on spearheading product development projects that prioritize customer needs and leverage Agile methodologies, particularly in the healthcare and education industries. Proficient in managing the complete SDLC, including requirement gathering, user story creation, backlog grooming, sprint planning, and release management.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.label}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

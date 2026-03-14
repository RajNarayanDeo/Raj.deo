import { motion } from "framer-motion";

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "15+", label: "Features Launched" },
  { value: "25%", label: "Engagement Boost" },
  { value: "70%", label: "Complaint Reduction" },
];

const V2About = () => (
  <section id="v2-about" className="py-24 px-6 border-t border-v2-border">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-v2-accent font-bold text-xs tracking-[0.3em] uppercase">01 — About</span>
        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          <h2 className="font-v2-heading text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Building products that
            <span className="text-v2-accent"> matter</span>
          </h2>
          <p className="text-v2-muted text-lg leading-relaxed self-center">
            Cultivated a robust career in Product Management, focusing on spearheading product development projects that prioritize customer needs and leverage Agile methodologies, particularly in the healthcare and education industries. Proficient in managing the complete SDLC, including requirement gathering, user story creation, backlog grooming, sprint planning, and release management.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-v2-border mt-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-v2-bg p-8 text-center"
          >
            <p className="font-v2-heading text-4xl md:text-5xl font-black text-v2-accent">{s.value}</p>
            <p className="text-v2-muted text-xs uppercase tracking-[0.2em] mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default V2About;

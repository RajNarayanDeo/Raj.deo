import { motion } from "framer-motion";

const skills = [
  { name: "Product Management & Strategy", pct: 95 },
  { name: "Agile / Scrum / SAFe", pct: 92 },
  { name: "SDLC & Release Management", pct: 90 },
  { name: "Data Analytics & Power BI", pct: 85 },
  { name: "Python / SQL / API", pct: 75 },
  { name: "UI/UX Design Thinking", pct: 80 },
  { name: "JIRA / Polarian", pct: 90 },
  { name: "Stakeholder Management", pct: 92 },
];

const additional = [
  "Power Query", "Power Pivot", "Backlog Grooming", "Sprint Planning",
  "PI Planning", "System Demos", "Inspect & Adapt", "User Stories",
  "Roadmap Execution", "KPI Analysis", "A/B Testing", "Customer Feedback",
  "Cross-Functional Leadership", "Cloud Computing", "MIS Reporting",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">The Arsenal</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Built to deliver <span className="italic text-accent">anything.</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl space-y-6 mb-16">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{skill.pct}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.06 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase mb-4">Also proficient in</p>
        <div className="flex flex-wrap gap-2">
          {additional.map((s) => (
            <span key={s} className="font-mono text-[11px] text-muted-foreground border border-border px-3 py-1.5 rounded">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Product & Strategy",
    skills: ["Product Management", "Strategic Planning", "Roadmap Execution", "Backlog Management", "PI Planning"],
  },
  {
    title: "Agile & Frameworks",
    skills: ["Scrum Master", "SAFe 6 PO/PM", "Sprint Planning", "Release Management", "SDLC"],
  },
  {
    title: "Technical Skills",
    skills: ["Python", "SQL", "API", "UI/UX", "Power BI", "Power Query", "Power Pivot"],
  },
  {
    title: "Tools & Platforms",
    skills: ["JIRA", "Polarian", "Data Analytics", "MIS Reporting"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card"
          >
            <h3 className="font-display text-xl font-bold mb-4 text-primary">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

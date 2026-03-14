import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Product & Strategy",
    skills: ["Product Management", "Strategic Planning", "Roadmap Execution", "Backlog Management", "PI Planning", "Go-to-Market Strategy", "Product-Market Fit"],
  },
  {
    title: "Agile & Frameworks",
    skills: ["Scrum Master", "SAFe 6 PO/PM", "Sprint Planning", "Release Management", "SDLC", "Design Thinking", "Lean Startup"],
  },
  {
    title: "AI / ML & Data",
    skills: ["Prompt Engineering", "LLM Fine-Tuning", "NLP", "Computer Vision", "ML Model Evaluation", "A/B Testing", "Data Labeling & Annotation", "AI Ethics & Responsible AI", "RAG Pipelines"],
  },
  {
    title: "Technical Skills",
    skills: ["Python", "SQL", "API", "UI/UX", "Power BI", "Power Query", "Power Pivot", "Cloud Computing (AWS/GCP)", "MLOps Basics"],
  },
  {
    title: "AI Tools & Platforms",
    skills: ["OpenAI API", "Hugging Face", "LangChain", "TensorFlow/PyTorch Basics", "Vertex AI", "Amazon SageMaker", "Vector Databases"],
  },
  {
    title: "Tools & Platforms",
    skills: ["JIRA", "Polarian", "Data Analytics", "MIS Reporting", "Figma", "Mixpanel", "Amplitude"],
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

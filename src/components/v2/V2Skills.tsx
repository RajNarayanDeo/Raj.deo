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

const V2Skills = () => (
  <section id="v2-skills" className="py-24 px-6 border-t border-v2-border">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-v2-accent font-bold text-xs tracking-[0.3em] uppercase">04 — Skills</span>
        <h2 className="font-v2-heading text-4xl md:text-5xl font-black mt-4 tracking-tight">
          Tool<span className="text-v2-accent">kit</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-2 gap-px bg-v2-border">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-v2-bg p-8"
          >
            <h3 className="font-v2-heading text-lg font-bold text-v2-accent mb-5">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-v2-border text-v2-text text-sm px-4 py-2 font-medium hover:border-v2-accent hover:text-v2-accent transition-colors cursor-default"
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

export default V2Skills;

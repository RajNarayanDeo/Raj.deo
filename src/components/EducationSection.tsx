import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { degree: "Post Graduate Diploma in Management", school: "IMT Ghaziabad", year: "2024–2026 (Pursuing)" },
  { degree: "B.E. (Electrical)", school: "BRCM College of Engineering and Technology, Haryana", year: "2010" },
];

const certifications = [
  { name: "SAFe 6 PO/PM", year: "2024" },
  { name: "Post Graduate Program in Cloud Computing", year: "2023" },
  { name: "Certified Scrum Master", year: "2023" },
  { name: "Product Management", year: "2022" },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Credentials</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Education & <span className="italic text-accent">Certifications.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={22} />
            <h3 className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-l-2 border-primary/30 pl-6 py-2"
              >
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">{edu.year}</span>
                <h4 className="font-display text-xl font-bold mt-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary" size={22} />
            <h3 className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between border border-border rounded-lg p-5 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-medium">{cert.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

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
  <section id="education" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <p className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-1">{edu.year}</p>
                <h4 className="font-display text-lg font-bold">{edu.degree}</h4>
                <p className="text-sm text-primary">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="text-primary" size={28} /> Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 shadow-card flex items-center justify-between"
              >
                <h4 className="font-semibold">{cert.name}</h4>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

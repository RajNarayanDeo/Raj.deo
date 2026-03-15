import { motion } from "framer-motion";

const education = [
  { degree: "Post Graduate Diploma in Management", school: "IMT Ghaziabad", year: "2024–2026 (Pursuing)" },
  { degree: "B.E. (Electrical)", school: "BRCM College of Engineering and Technology, Haryana", year: "2010" },
];

const certifications = [
  { name: "SAFe 6 PO/PM", year: "2024" },
  { name: "Post Graduate Program in Cloud Computing", year: "2023" },
  { name: "AI Product Manager", year: "2023" },
  { name: "Product Management", year: "2022" },
];

const V2Education = () => (
  <section id="v2-education" className="py-24 px-6 border-t border-v2-border">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-v2-accent font-bold text-xs tracking-[0.3em] uppercase">05 — Education</span>
        <h2 className="font-v2-heading text-4xl md:text-5xl font-black mt-4 tracking-tight">
          Learning <span className="text-v2-accent">Path</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="font-v2-heading text-sm font-bold uppercase tracking-[0.2em] text-v2-accent mb-8">Degrees</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-v2-accent pl-6 py-2"
              >
                <p className="text-xs text-v2-muted font-bold tracking-wider uppercase">{edu.year}</p>
                <h4 className="font-v2-heading text-lg font-bold mt-1">{edu.degree}</h4>
                <p className="text-sm text-v2-muted mt-0.5">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-v2-heading text-sm font-bold uppercase tracking-[0.2em] text-v2-accent mb-8">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between border border-v2-border p-5 hover:border-v2-accent/40 transition-colors"
              >
                <span className="font-semibold text-sm">{cert.name}</span>
                <span className="text-xs font-bold text-v2-accent tracking-wider">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default V2Education;

import { motion } from "framer-motion";

const experiences = [
  {
    num: "01",
    title: "Product Owner",
    company: "Channel Soft (Clario)",
    period: "Jan 2024 – Present",
    desc: "Leading end-to-end product lifecycle for clinical healthcare applications across three Agile teams.",
    highlights: [
      "Led 3 web & desktop applications for a leading clinical healthcare organization",
      "Delivered 100% committed business value through PI Planning & System Demos",
      "Launched 15+ features, reducing study build time from 10 weeks to 3 weeks",
      "Boosted user engagement by 25% through continuous customer feedback integration",
    ],
    tags: ["SAFe", "Agile", "PI Planning", "Clinical Healthcare", "SDLC"],
  },
  {
    num: "02",
    title: "Asst. Senior Manager (Product)",
    company: "BYJU'S — Think and Learn Pvt. Ltd.",
    period: "Feb 2020 – Jan 2024",
    desc: "Full-cycle product deployment and mobile app redesign for India's largest EdTech platform.",
    highlights: [
      "Deployed UPSC, BPSC & UPPSC programs across BEP App and Tablet platforms",
      "Led mobile app redesign — 70% increase in user engagement & retention",
      "70% reduction in customer complaints through enhanced documentation",
      "Analyzed KPIs to optimize marketing campaigns and product adoption",
    ],
    tags: ["Product Management", "Mobile App", "EdTech", "KPI Analysis"],
  },
  {
    num: "03",
    title: "Content Writer",
    company: "VDK Publication (Drishti IAS)",
    period: "Dec 2019 – Feb 2020",
    desc: "Developed comprehensive UPSC curriculum with subject matter experts.",
    highlights: [
      "Partnered with SMEs to strategize UPSC curriculum for maximum student readiness",
      "Led project planning meetings ensuring team alignment and successful delivery",
    ],
    tags: ["Curriculum Design", "Project Planning", "Content Strategy"],
  },
  {
    num: "04",
    title: "Research Associate",
    company: "Under Member of Parliament",
    period: "Oct 2018 – Mar 2019",
    desc: "Legislative research, policy documentation, and constituency project proposals.",
    highlights: [
      "Drafted developmental project proposals and policy briefs for constituency initiatives",
      "Conducted parliamentary research and documentation for public policy matters",
    ],
    tags: ["Policy Research", "Documentation", "Government"],
  },
  {
    num: "05",
    title: "Project Manager",
    company: "J.K.M Group of Educational Institute",
    period: "Dec 2012 – Dec 2017",
    desc: "Project planning, vendor management, and construction coordination across educational infrastructure.",
    highlights: [
      "Collaborated with engineers & architects for project specifications and scheduling",
      "Negotiated vendor contracts, managed procurement and monitored inventory",
    ],
    tags: ["Project Management", "Vendor Management", "Construction"],
  },
  {
    num: "06",
    title: "Trainee Project Engineer",
    company: "The Tata Power Co. Ltd.",
    period: "Nov 2010 – May 2012",
    desc: "Land acquisition and CSR for Tiruldih Thermal Power Plant (3×660 MW).",
    highlights: [
      "Managed acquisition of 1500 acres for thermal power plant with legal compliance",
      "Established MIS for project tracking and contributed to CSR initiatives",
    ],
    tags: ["Land Acquisition", "MIS", "CSR", "Power Sector"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Professional Journey</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Six organizations. <span className="italic text-accent">One standard.</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-t border-border py-10 group"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-16 flex-shrink-0">
                <span className="font-display text-3xl font-bold text-muted-foreground/30 italic">{exp.num}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{exp.title}</h3>
                    <p className="font-mono text-xs text-primary tracking-wider uppercase mt-1">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider shrink-0">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.desc}</p>
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-foreground/70 flex gap-3">
                      <span className="text-primary mt-0.5">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

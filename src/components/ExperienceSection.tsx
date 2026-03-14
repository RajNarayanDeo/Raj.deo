import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Product Owner",
    company: "Channel Soft (Clario), Vijaywada",
    period: "Jan 2024 – Present",
    highlights: [
      "Led end-to-end product lifecycle for 3 web & desktop applications in clinical healthcare",
      "Delivered 100% committed business value through PI Planning, System Demos & Inspect & Adapt sessions",
      "Launched 15+ innovative features, reducing study build time from 10 weeks to 3 weeks",
      "Boosted user engagement by 25% through continuous customer feedback integration",
    ],
  },
  {
    title: "Assistant Senior Manager (Product/Content)",
    company: "Think and Learn Pvt. Limited (BYJU'S), Bengaluru",
    period: "Feb 2020 – Jan 2024",
    highlights: [
      "Deployed UPSC, BPSC & UPPSC programs across BEP App and Tablet platforms",
      "Led mobile app redesign achieving 70% increase in user engagement & retention",
      "70% reduction in customer complaints through enhanced product documentation",
      "Analyzed KPIs to optimize marketing campaigns and product adoption",
    ],
  },
  {
    title: "Content Writer",
    company: "VDK Publication (Drishti IAS), New Delhi",
    period: "Dec 2019 – Feb 2020",
    highlights: [
      "Developed comprehensive UPSC curriculum with subject matter experts",
      "Led project planning meetings ensuring team alignment and delivery",
    ],
  },
  {
    title: "Research Associate",
    company: "Under Member of Parliament",
    period: "Oct 2018 – Mar 2019",
    highlights: [
      "Drafted developmental project proposals and policy briefs",
      "Conducted parliamentary research and documentation",
    ],
  },
  {
    title: "Project Manager",
    company: "J.K.M Group of Educational Institute, Jharkhand",
    period: "Dec 2012 – Dec 2017",
    highlights: [
      "Collaborated with engineers & architects for project specs and scheduling",
      "Negotiated vendor contracts and managed procurement",
    ],
  },
  {
    title: "Trainee Project Engineer",
    company: "The Tata Power Co. Ltd., Ranchi",
    period: "Nov 2010 – May 2012",
    highlights: [
      "Managed acquisition of 1500 acres for Tiruldih Thermal Power Plant (3×660 MW)",
      "Established MIS for project tracking and contributed to CSR initiatives",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

            <div className="flex-1 ml-14 md:ml-0" />
            <div className="flex-1 ml-14 md:ml-0">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                <ul className="space-y-2 text-left">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

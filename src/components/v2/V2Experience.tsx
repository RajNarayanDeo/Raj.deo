import { motion } from "framer-motion";

const experiences = [
  {
    title: "Product Owner",
    company: "Channel Soft (Clario)",
    location: "Vijaywada",
    period: "Jan 2024 – Present",
    highlights: [
      "Led end-to-end product lifecycle for 3 web & desktop applications in clinical healthcare",
      "Delivered 100% committed business value through PI Planning, System Demos & Inspect & Adapt sessions",
      "Launched 15+ innovative features, reducing study build time from 10 weeks to 3 weeks",
      "Boosted user engagement by 25% through continuous customer feedback integration",
    ],
  },
  {
    title: "Asst. Senior Manager (Product/Content)",
    company: "Think and Learn Pvt. Limited (BYJU'S)",
    location: "Bengaluru",
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
    company: "VDK Publication (Drishti IAS)",
    location: "New Delhi",
    period: "Dec 2019 – Feb 2020",
    highlights: [
      "Developed comprehensive UPSC curriculum with subject matter experts",
      "Led project planning meetings ensuring team alignment and delivery",
    ],
  },
  {
    title: "Research Associate",
    company: "Under Member of Parliament",
    location: "",
    period: "Oct 2018 – Mar 2019",
    highlights: [
      "Drafted developmental project proposals and policy briefs",
      "Conducted parliamentary research and documentation",
    ],
  },
  {
    title: "Project Manager",
    company: "J.K.M Group of Educational Institute",
    location: "Jharkhand",
    period: "Dec 2012 – Dec 2017",
    highlights: [
      "Collaborated with engineers & architects for project specs and scheduling",
      "Negotiated vendor contracts and managed procurement",
    ],
  },
  {
    title: "Trainee Project Engineer",
    company: "The Tata Power Co. Ltd.",
    location: "Ranchi",
    period: "Nov 2010 – May 2012",
    highlights: [
      "Managed acquisition of 1500 acres for Tiruldih Thermal Power Plant (3×660 MW)",
      "Established MIS for project tracking and contributed to CSR initiatives",
    ],
  },
];

const V2Experience = () => (
  <section id="v2-experience" className="py-24 px-6 border-t border-v2-border">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-v2-accent font-bold text-xs tracking-[0.3em] uppercase">02 — Experience</span>
        <h2 className="font-v2-heading text-4xl md:text-5xl font-black mt-4 tracking-tight">
          Career <span className="text-v2-accent">Timeline</span>
        </h2>
      </motion.div>

      <div className="mt-16 space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group border-t border-v2-border py-8 grid md:grid-cols-[200px_1fr] gap-6 hover:bg-v2-accent/[0.03] transition-colors px-4 -mx-4"
          >
            <div>
              <p className="text-v2-accent text-xs font-bold tracking-[0.15em] uppercase">{exp.period}</p>
              {exp.location && (
                <p className="text-v2-muted text-xs mt-1">{exp.location}</p>
              )}
            </div>
            <div>
              <h3 className="font-v2-heading text-xl font-bold group-hover:text-v2-accent transition-colors">
                {exp.title}
              </h3>
              <p className="text-v2-muted text-sm mt-0.5">{exp.company}</p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-v2-muted flex gap-3">
                    <span className="text-v2-accent mt-0.5 shrink-0">↳</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default V2Experience;

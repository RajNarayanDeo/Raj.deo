import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Clock, BarChart3, Smartphone } from "lucide-react";

const projects = [
  {
    icon: Rocket,
    title: "Clinical Trial Platform Overhaul",
    org: "Clario",
    tags: ["Healthcare", "SAFe Agile", "Web & Desktop"],
    description:
      "Re-architected 3 clinical-trial applications, cutting study build time from 10 weeks to just 3 weeks while delivering 100% committed business value across every Program Increment.",
    metrics: [
      { label: "Build Time Reduction", value: "70%" },
      { label: "Features Launched", value: "15+" },
      { label: "Business Value", value: "100%" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Redesign & Engagement Boost",
    org: "BYJU'S",
    tags: ["EdTech", "Mobile", "UX Research"],
    description:
      "Led a full mobile app redesign for UPSC preparation programs on the BEP App and Tablet, driving a 70% increase in user engagement and retention through data-driven UX improvements.",
    metrics: [
      { label: "Engagement Lift", value: "70%" },
      { label: "Complaint Reduction", value: "70%" },
      { label: "Platforms", value: "App + Tablet" },
    ],
  },
  {
    icon: BarChart3,
    title: "UPSC & State PSC Program Launches",
    org: "BYJU'S",
    tags: ["Product Launch", "Content Strategy", "KPI Analytics"],
    description:
      "Deployed end-to-end UPSC, BPSC & UPPSC programs, managing cross-functional teams of 20+ members. Analyzed KPIs to optimise marketing campaigns and boost product adoption across multiple states.",
    metrics: [
      { label: "Programs Launched", value: "3" },
      { label: "Team Size", value: "20+" },
      { label: "User Growth", value: "25%" },
    ],
  },
  {
    icon: Users,
    title: "Land Acquisition & CSR — Thermal Power Plant",
    org: "Tata Power",
    tags: ["Infrastructure", "Stakeholder Mgmt", "MIS"],
    description:
      "Managed acquisition of 1,500 acres for the Tiruldih Thermal Power Plant (3×660 MW), establishing a Management Information System for project tracking and contributing to CSR initiatives.",
    metrics: [
      { label: "Land Acquired", value: "1,500 ac" },
      { label: "Plant Capacity", value: "1,980 MW" },
      { label: "MIS Setup", value: "✓" },
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Projects &amp; Case Studies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Key product launches and initiatives that delivered measurable impact.
        </p>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-primary font-semibold">{project.org}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold tracking-wider uppercase bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-3 border-t border-border pt-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-xl font-bold text-primary">{m.value}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

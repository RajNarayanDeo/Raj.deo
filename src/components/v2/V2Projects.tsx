import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Swiggy Product Teardown",
    subtitle: "Improving Customer Retention",
    tags: ["Food Delivery", "Retention Strategy", "UX Analysis"],
    description:
      "Comprehensive teardown analyzing why retention is stuck at 40%, with users ordering only on weekends. Proposed personalized recommendations, gamification, loyalty programs, and smart nudges to maximize CLTV.",
    stats: ["40% Retention Rate", "500+ Cities", "45-50% Market Share"],
    pdf: "/case-studies/Swiggy_Teardown.pdf",
  },
  {
    title: "WhatsApp Status Enhancement",
    subtitle: "Boosting Engagement & Discoverability",
    tags: ["Social Media", "Feature Design", "User Research"],
    description:
      "Analyzed pain points across casual posters, power users, and SMBs. Proposed polls, scheduled posts, CTA buttons, mentions/tagging, and selective sharing to drive engagement among 500M+ Status users.",
    stats: ["3B+ Users", "500M+ Status Users", "100B+ Daily Messages"],
    pdf: "/case-studies/Whatsapp_Status.pdf",
  },
  {
    title: "Amazon — Reducing Choice Overload",
    subtitle: "Tackling Decision Fatigue",
    tags: ["E-Commerce", "Decision Science", "UX/UI"],
    description:
      "Explored how excessive choices cause cognitive overload leading to 35% cart abandonment and 56% visitor drop-off. Proposed AI-powered curated shortlists, smarter filters, and trust-verified reviews.",
    stats: ["35% Cart Abandonment", "56% Visitor Drop-off", "75% Review Distrust"],
    pdf: "/case-studies/Amazon_Decision_Fatigue.pdf",
  },
  {
    title: "Blinkit Product Strategy",
    subtitle: "Scaling Quick Commerce",
    tags: ["Quick Commerce", "Growth Strategy", "Competitive Analysis"],
    description:
      "Strategic analysis of Blinkit's 45% market share with 639 dark stores across 39 cities. Identified AOV gap vs Zepto (₹460 vs ₹607), proposed subscription models and dark-store optimisation.",
    stats: ["45% Market Share", "639 Dark Stores", "6L+ Daily Orders"],
    pdf: "/case-studies/Blinkit_Product_Strategy.pdf",
  },
];

const V2Projects = () => (
  <section id="v2-projects" className="py-24 px-6 border-t border-v2-border">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-v2-accent font-bold text-xs tracking-[0.3em] uppercase">03 — Projects</span>
        <h2 className="font-v2-heading text-4xl md:text-5xl font-black mt-4 tracking-tight">
          Case <span className="text-v2-accent">Studies</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group border-2 border-v2-border hover:border-v2-accent/50 p-8 flex flex-col transition-colors relative"
          >
            <ArrowUpRight
              size={20}
              className="absolute top-6 right-6 text-v2-muted group-hover:text-v2-accent transition-colors"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-[0.15em] text-v2-accent bg-v2-accent/10 px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-v2-heading text-xl font-bold group-hover:text-v2-accent transition-colors">
              {p.title}
            </h3>
            <p className="text-v2-accent/70 text-sm font-semibold mt-1">{p.subtitle}</p>
            <p className="text-v2-muted text-sm leading-relaxed mt-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-v2-border">
              {p.stats.map((s) => (
                <span key={s} className="text-xs font-bold text-v2-text">{s}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default V2Projects;

import { motion } from "framer-motion";
import { FileText, ExternalLink, ShoppingCart, MessageCircle, Package, UtensilsCrossed } from "lucide-react";

const projects = [
  {
    icon: UtensilsCrossed,
    title: "Swiggy Product Teardown",
    subtitle: "Improving Customer Retention",
    tags: ["Food Delivery", "Retention Strategy", "UX Analysis"],
    description:
      "A comprehensive teardown of Swiggy's platform analyzing customer retention challenges (stuck at 40%). Proposed data-driven solutions including personalized recommendations, gamification, and loyalty programs to boost repeat orders.",
    metrics: [
      { label: "Retention Rate", value: "40%" },
      { label: "Cities Covered", value: "500+" },
      { label: "Restaurant Partners", value: "200K+" },
    ],
    pdf: "/case-studies/Swiggy_Teardown.pdf",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Status Enhancement",
    subtitle: "Boosting Engagement & Discoverability",
    tags: ["Social Media", "Feature Design", "User Research"],
    description:
      "Analyzed pain points in WhatsApp Status for casual users and SMBs — limited engagement tools, no analytics, and poor discoverability. Proposed polls, scheduled posts, CTA buttons, and selective sharing to drive engagement among 450M+ Status users.",
    metrics: [
      { label: "Global Users", value: "3B+" },
      { label: "Status Users", value: "450M+" },
      { label: "Countries", value: "180" },
    ],
    pdf: "/case-studies/Whatsapp_Status.pdf",
  },
  {
    icon: ShoppingCart,
    title: "Amazon — Reducing Choice Overload",
    subtitle: "Tackling Decision Fatigue in E-Commerce",
    tags: ["E-Commerce", "Decision Science", "UX/UI"],
    description:
      "Explored how excessive product choices on Amazon cause decision fatigue, leading to 35% cart abandonment and 56% visitor drop-off. Proposed AI-powered curated shortlists, smarter filters, and trust-verified reviews to simplify purchasing decisions.",
    metrics: [
      { label: "Cart Abandonment", value: "35%" },
      { label: "Filter Dissatisfied", value: "44%" },
      { label: "Distrust Reviews", value: "75%" },
    ],
    pdf: "/case-studies/Amazon_Decision_Fatigue.pdf",
  },
  {
    icon: Package,
    title: "Blinkit Product Strategy",
    subtitle: "Scaling Quick Commerce Leadership",
    tags: ["Quick Commerce", "Growth Strategy", "Competitive Analysis"],
    description:
      "Strategic analysis of Blinkit's 45% market share dominance in quick commerce. Identified AOV gap vs Zepto (₹460 vs ₹607), proposed subscription models, city expansion, and dark-store optimisation to strengthen unit economics and retention.",
    metrics: [
      { label: "Market Share", value: "45%" },
      { label: "Dark Stores", value: "639" },
      { label: "Avg Delivery", value: "9 min" },
    ],
    pdf: "/case-studies/Blinkit_Product_Strategy.pdf",
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
          Product teardowns and strategic analyses — submitted by Raj Narayan Deo.
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
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-primary font-semibold">{project.subtitle}</span>
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground mb-3 pl-[52px]">
                By Raj Narayan Deo
              </p>

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

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-3 border-t border-border pt-4 mb-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-xl font-bold text-primary">{m.value}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <FileText size={16} /> View Full Case Study <ExternalLink size={14} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

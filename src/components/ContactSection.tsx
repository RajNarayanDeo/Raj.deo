import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Let's connect</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Ready to build <span className="italic text-accent">something great?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden max-w-3xl">
        {[
          { icon: Mail, label: "Email", value: "raj.narayandev@gmail.com", href: "mailto:raj.narayandev@gmail.com" },
          { icon: MapPin, label: "Location", value: "Vijayawada, Andhra Pradesh" },
          { label: "Status", value: "Open to opportunities", status: true },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-8"
          >
            <p className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase mb-3">{item.label}</p>
            {'status' in item && item.status ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ) : 'href' in item && item.href ? (
              <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors break-all">{item.value}</a>
            ) : (
              <p className="text-sm font-medium">{item.value}</p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-sm mt-8"
      >
        Languages: English, Hindi &amp; Bengali
      </motion.p>
    </div>
  </section>
);

export default ContactSection;

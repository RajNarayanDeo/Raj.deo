import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const V2Contact = () => (
  <section id="v2-contact" className="py-24 px-6 border-t border-v2-border">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-v2-accent font-bold text-xs tracking-[0.3em] uppercase">06 — Contact</span>
        <h2 className="font-v2-heading text-4xl md:text-5xl font-black mt-4 tracking-tight">
          Let's <span className="text-v2-accent">Connect</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-3 gap-px bg-v2-border">
        {[
          { icon: Mail, label: "Email", value: "raj.narayandev@gmail.com", href: "mailto:raj.narayandev@gmail.com" },
          { icon: Phone, label: "Phone", value: "+91 8447228045", href: "tel:+918447228045" },
          { icon: MapPin, label: "Location", value: "Vijayawada, AP", href: "#" },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-v2-bg p-10 text-center group hover:bg-v2-accent/[0.03] transition-colors"
          >
            <item.icon className="mx-auto text-v2-accent mb-4" size={28} />
            <p className="text-xs text-v2-muted uppercase tracking-[0.2em] mb-2">{item.label}</p>
            <p className="font-semibold text-sm group-hover:text-v2-accent transition-colors">{item.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-v2-muted text-sm mt-10"
      >
        Languages: English, Hindi &amp; Bengali
      </motion.p>
    </div>
  </section>
);

export default V2Contact;
